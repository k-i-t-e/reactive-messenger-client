import {Component, OnInit} from "@angular/core";
import {LoginInfo} from "../../model/LoginInfo";
import {AuthService} from "../../services/AuthService";

@Component({
    selector: 'app-login',
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {
    loginInfo: LoginInfo = {
      userName: "",
      password: ""
    };

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
    }

    signInButtonClick(): void  {
        if (this.loginInfo.userName.length > 0 && this.loginInfo.password.length) {
            this.authService.login(this.loginInfo).subscribe(authInfo => console.log(authInfo))
        }
    }
}