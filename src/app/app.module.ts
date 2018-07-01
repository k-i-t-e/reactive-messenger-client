import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from "./auth/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialAppModule} from "./material.module";
import {AuthService} from "./services/auth.service";
import {MessengerComponent} from "./messenger/messenger.component";
import {AppRoutingModule} from "./app-routing.module";
import {ContactsService} from "./services/contacts.service";
import {ContactsComponent} from "./contacts/contacts.component";

@NgModule({
    imports:      [
                   BrowserModule,
                   FormsModule,
                   BrowserAnimationsModule,
                   MaterialAppModule,
                   AppRoutingModule
                  ],
    providers:    [ AuthService, ContactsService ],
    declarations: [ AppComponent, LoginComponent, MessengerComponent, ContactsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}