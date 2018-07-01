import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../services/contacts.service";
import {User} from "../model/AuthInfo";

@Component({
  selector: 'app-contacts',
  template: require('./contacts.component.html')
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}

  contacts: User[] = [];

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts)
  }
}