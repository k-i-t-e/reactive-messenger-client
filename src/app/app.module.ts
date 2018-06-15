import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from "./auth/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    BrowserAnimationsModule,
                    MaterialModule
                  ],
    declarations: [ AppComponent, LoginComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}