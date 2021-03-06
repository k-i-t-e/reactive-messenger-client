import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/login/login.component";
import {DialogsComponent} from "./dialogs/dialogs.component";
import {TruncatePipe} from "./common/truncate.pipe";
import {ContactsComponent} from "./contacts/contacts.component";
import {DialogComponent} from "./dialog/dialog.component";
import {MessengerComponent} from "./messenger/messenger.component";
import {ContactItemComponent} from "./common/contact-item/contact-item.component";
import {AuthService} from "./services/auth.service";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {MaterialAppModule} from "../material.module";
import {MessageComponent} from "./dialog/message/message.component";
import {SearchComponent} from "./search/search.component";
import {ScrollbarModule} from "ngx-scrollbar";
import {ConfirmDialogComponent} from "./common/confirm-dialog/confirm-dialog.component";

@NgModule({
  imports: [ CommonModule, FormsModule, MaterialAppModule, ScrollbarModule ],
  declarations: [ LoginComponent, MessengerComponent, ContactsComponent, ContactItemComponent,
                  DialogsComponent, TruncatePipe, DialogComponent, MessageComponent, SearchComponent,
                  ConfirmDialogComponent ],
  entryComponents: [ ConfirmDialogComponent ],
  providers: [ AuthService, ContactService, DialogService ],
  exports: [ LoginComponent, MessengerComponent ]
})
export class MessengerModule {}