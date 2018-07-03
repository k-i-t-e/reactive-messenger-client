import {Component, OnInit} from "@angular/core";
import {Contact} from "../model/AuthInfo";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contacts',
  template: require('./contacts.component.html'),
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService: ContactService) {}

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts.map(c => {
      return {id : c.id, name: c.userName}
    }))
  }
}