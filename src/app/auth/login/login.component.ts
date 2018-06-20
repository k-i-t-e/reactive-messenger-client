import {Component, OnInit} from "@angular/core";
import {LoginInfo} from "../../model/LoginInfo";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {
    loginInfo: LoginInfo = {
      userName: "",
      password: ""
    };

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.authService.getCurrentUserObservable().subscribe(authInfo => {
            console.log(authInfo);
            if (authInfo) {
                this.router.navigateByUrl('/messenger')
            }
        })
    }

    signInButtonClick(): void  {
        if (this.loginInfo.userName.length > 0 && this.loginInfo.password.length) {
            this.authService.login(this.loginInfo);
        }
    }
}