import {Injectable} from "@angular/core";
import {LoginInfo} from "../model/LoginInfo";
import {AuthInfo} from "../model/AuthInfo";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
    constructor() {}

    login(info: LoginInfo): Observable<AuthInfo> {
        return Observable.of({user: {id: 1, userName: info.userName }, token: 'dasdasd'})
    }
}