import {Injectable} from "@angular/core";
import {LoginInfo} from "../model/LoginInfo";
import {AuthInfo, UNAUTHORIZED, User} from "../model/AuthInfo";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import { of } from 'rxjs'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {AUTH_API_ROOT_URL} from "./constants";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public currentUser: AuthInfo;
  private userSubject: BehaviorSubject<AuthInfo> = new BehaviorSubject(null);

  login(info: LoginInfo): void {
    this.http.post<Result<AuthInfo>>(AUTH_API_ROOT_URL + 'login', info)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null)
        })
      )
      .subscribe(result => {
        if (result) {
          this.currentUser = result.payload;
          this.userSubject.next(result.payload);
        } else {
          this.userSubject.next(UNAUTHORIZED);
        }
      });
  }

  getCurrentUserObservable(): Observable<AuthInfo> {
    return this.userSubject;
  }

  getAuthHeaders() {
    return {
      headers: new HttpHeaders({'X-Auth-Token': this.currentUser.token})
    }
  }
}