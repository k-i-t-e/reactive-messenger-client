import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {Contact, User} from "../model/AuthInfo";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.css')]
})
export class SearchComponent {
  searchStr: string;
  results: Array<Contact> = [];
  localResults: Array<Contact> = [];
  searchStarted = false;

  @Input() selectedContact: Contact;

  @Output() onContactSelected = new EventEmitter<Contact>();
  @Output() search: EventEmitter<boolean> = new EventEmitter();

  constructor(private contactService: ContactService) {}

  clear(): void {
    this.results = [];
    this.searchStr = '';
    this.searchStarted = false;
    this.search.emit(false)
  }

  doSearch(): void {
    const searchStr = this.searchStr.trim();
    if (!this.searchStarted && searchStr.length > 0) {
      this.searchStarted = true;
      this.search.emit(true);
    }
    if (searchStr.length == 0) {
      this.searchStarted = false;
      this.search.emit(false);
      this.results = [];
    }

    if (this.searchStarted) {
      this.localResults = this.contactService.searchContacts(searchStr).map(u => u.toContact());

      if (searchStr.length > 2) {
        this.contactService.searchUsers(searchStr)
          .pipe(
            map(users => {
              console.log(users);
              return users.map(u => User.toContact(u))
            })
          )
          .subscribe(contacts => {
            this.results = contacts
          });
      }
    }
  }

  addContact(contact: Contact, event: Event): void {
    event.stopPropagation();
    this.contactService.addContact(contact).subscribe(ignored => {
      this.localResults = this.contactService.searchContacts(this.searchStr.trim()).map(u => u.toContact())
    })
  }

  contactSelected(contact: Contact) {
    this.onContactSelected.emit(contact)
  }

  isSelected(contact: Contact): boolean {
    if (this.selectedContact) {
      return this.selectedContact.name === contact.name;
    }
    return false;
  }

  inContacts(contact: Contact): boolean {
    return this.localResults.filter(c => c.name === contact.name).length > 0
  }
}