import {Injectable} from "@angular/core";
import {LoginInfo} from "../model/LoginInfo";
import {AuthInfo, User} from "../model/AuthInfo";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import { of } from 'rxjs'

@Injectable()
export class AuthService {
    constructor() {}

    public currentUser: AuthInfo;
    private userSubject: BehaviorSubject<AuthInfo> = new BehaviorSubject(null);

    login(info: LoginInfo): void {
        of({user: new User(1, info.userName), token: 'dasdasd'})
            .subscribe(info => {
                this.currentUser = info;
                this.userSubject.next(info);
            })
    }

    getCurrentUserObservable(): Observable<AuthInfo> {
        return this.userSubject;
    }
}