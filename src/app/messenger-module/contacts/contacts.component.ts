import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Contact, User} from "../model/AuthInfo";
import {ContactService} from "../services/contact.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ConfirmDialogComponent} from "../common/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-contacts',
  template: require('./contacts.component.html'),
})
export class ContactsComponent implements OnInit {
  @Input() selectedContact: Contact;

  @Output() onContactSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [];
  error: string;

  constructor(private contactsService: ContactService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(
      contacts => {
        console.log(contacts);
        this.contacts = contacts.map(c => User.toContact(c))
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

  onDeleteBtnClick(contact: Contact, e: Event): void {
    e.stopPropagation();
    let dialogRef:MatDialogRef<ConfirmDialogComponent, Boolean> = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      data: { title: 'Delete contact', text: `Are you sure, you want to delete ${contact.name} from contacts?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.contactsService.deleteContact(contact)
      }
    })
  }
}