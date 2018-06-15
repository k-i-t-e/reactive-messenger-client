import {Component, OnInit} from "@angular/core";
import {LoginInfo} from "../../model/LoginInfo";

@Component({
    selector: 'app-login',
    template: require('./login.component.html')
    //styles: require('./login.component.css')
})
export class LoginComponent implements OnInit {
    loginInfo: LoginInfo = {
      userName: "",
      password: ""
    };

    constructor() {}

    ngOnInit(): void {
    }

    signInButtonClick(): void  {
        console.log(this.loginInfo)
    }
}