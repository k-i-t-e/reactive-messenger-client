import {Component, OnInit} from "@angular/core";
import {Contact} from "../model/AuthInfo";

@Component({
  selector: 'app-messenger',
  template: require('./messenger.component.html'),
  styles:   [ require('./messenger.component.css') ]
})
export class MessengerComponent implements OnInit {
  selectedContact: Contact;

  constructor() {
  }

  ngOnInit(): void {
  }

  contactSelected(contact: Contact): void {
    this.selectedContact = contact;
  }
}