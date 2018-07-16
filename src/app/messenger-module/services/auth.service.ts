import {Injectable} from "@angular/core";
import {LoginInfo} from "../model/LoginInfo";
import {AuthInfo, UNAUTHORIZED, User} from "../model/AuthInfo";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import { of } from 'rxjs'
import {HttpClient} from "@angular/common/http";
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
      /*of({user: new User(1, info.userName), token: 'dasdasd'})
          .subscribe(info => {
              this.currentUser = info;
              this.userSubject.next(info);
          })*/
  }

  getCurrentUserObservable(): Observable<AuthInfo> {
    return this.userSubject;
  }
}