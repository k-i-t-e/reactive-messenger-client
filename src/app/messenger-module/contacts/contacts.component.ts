import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Contact} from "../model/AuthInfo";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contacts',
  template: require('./contacts.component.html'),
})
export class ContactsComponent implements OnInit {
  @Input() selectedContact: Contact;

  @Output() onContactSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [];
  error: string;

  constructor(private contactsService: ContactService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(
      contacts => {
        console.log(contacts);
        this.contacts = contacts.map(c => c.toContact())
      },
      error => this.error = "Error: Couldn't fetch users"
    )
  }

  contactSelected(contact: Contact): void {
    this.onContactSelected.emit(contact);
  }

  isSelected(contact: Contact): boolean {
    if (this.selectedContact) {
      return this.selectedContact.name === contact.name;
    }
    return false;
  }
}