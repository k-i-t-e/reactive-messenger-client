import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {DialogService} from "../services/dialog.service";
import {Contact} from "../model/AuthInfo";
import {ConfirmDialogComponent} from "../common/confirm-dialog/confirm-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialogs',
  template: require('./dialogs.component.html')
})
export class DialogsComponent implements OnInit {
  @Input() selectedContact: Contact;

  @Output() onDialogSelected = new EventEmitter<Contact>();
  dialogs: Contact[] = [];

  constructor(private dialogService: DialogService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dialogService.getDialogs().subscribe(dialogs => this.dialogs = dialogs.map(d => {
      return {
        name: d.contact,
        status: d.lastMessage.text,
        date: d.lastMessage.date
      }
    }))
  }

  dialogSelected(contact: Contact): void {
    this.onDialogSelected.emit(contact);
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
      data: {
        title: 'Delete contact',
        text: `Are you sure, you want to delete a dialog with ${contact.name}? All messages will be deleted`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.dialogService.deleteDialog(contact)
      }
    })
  }
}