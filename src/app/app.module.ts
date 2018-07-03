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
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactItemComponent} from "./common/contact-item/contact-item.component";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {DialogsComponent} from "./dialogs/dialogs.component";

@NgModule({
    imports:      [
                   BrowserModule,
                   FormsModule,
                   BrowserAnimationsModule,
                   MaterialAppModule,
                   AppRoutingModule
                  ],
    providers:    [ AuthService, ContactService, DialogService ],
    declarations: [ AppComponent, LoginComponent, MessengerComponent, ContactsComponent, ContactItemComponent,
                    DialogsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}