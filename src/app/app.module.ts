import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialAppModule} from "./material.module";
import {AppRoutingModule} from "./app-routing.module";
import {MessengerModule} from "./messenger-module/messenger.module";

@NgModule({
    imports:      [
                   BrowserModule,
                   FormsModule,
                   BrowserAnimationsModule,
                   MaterialAppModule,
                   AppRoutingModule,
                   MessengerModule
                  ],
    providers:    [ ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}