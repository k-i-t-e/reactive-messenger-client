import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from "./auth/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialAppModule} from "./material.module";
import {AuthService} from "./services/AuthService";

@NgModule({
    imports:      [BrowserModule,
                   FormsModule,
                   BrowserAnimationsModule,
                   MaterialAppModule
                  ],
    providers:    [ AuthService ],
    declarations: [ AppComponent, LoginComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}