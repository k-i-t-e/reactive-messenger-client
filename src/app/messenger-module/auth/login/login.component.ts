import {Component, OnInit} from "@angular/core";
import {LoginInfo} from "../../model/LoginInfo";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UNAUTHORIZED} from "../../model/AuthInfo";

@Component({
    selector: 'app-login',
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

  loginInProgress = false;
  loginInfo: LoginInfo = {
    userName: "",
    password: ""
  };

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.authService.getCurrentUserObservable().subscribe(authInfo => {
            console.log(authInfo);
            this.loginInProgress = false;
            if (authInfo && authInfo !== UNAUTHORIZED) {
                this.router.navigateByUrl('/messenger')
            } else if (authInfo === UNAUTHORIZED) {
                console.log("Invalid username or password")
            }
        })
    }

    signInButtonClick(): void  {
        if (this.loginInfo.userName.length > 0 && this.loginInfo.password.length) {
          this.loginInProgress = true;
          this.authService.login(this.loginInfo);
        }
    }
}