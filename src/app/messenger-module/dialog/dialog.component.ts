import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from "@angular/core";
import {Contact} from "../model/AuthInfo";
import {DialogService} from "../services/dialog.service";
import {Message} from "../model/Dialog";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-dialog',
  template: require('./dialog.component.html'),
  styles:   [ require('./dialog.component.css') ]
})
export class DialogComponent implements OnInit, OnChanges {
  @Input() contact: Contact;
  messages: Array<Message> = [];
  currentUserName: string;

  constructor(private dialogService: DialogService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.currentUserName = this.authService.currentUser.user.userName
  }

  ngOnChanges(changes: SimpleChanges): void {
    const contact: SimpleChange = changes.contact;
    this.dialogService.getDialog((<Contact> contact.currentValue).name).subscribe(messages => {
      console.log(messages);
      this.messages = messages
    })
  }
}