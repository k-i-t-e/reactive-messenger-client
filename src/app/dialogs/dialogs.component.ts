import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {DialogService} from "../services/dialog.service";
import {Contact} from "../model/AuthInfo";

@Component({
  selector: 'app-dialogs',
  template: require('./dialogs.component.html')
})
export class DialogsComponent implements OnInit {
  @Output() onDialogSelected = new EventEmitter<Contact>();
  dialogs: Contact[] = [];

  constructor(private dialogService: DialogService) {
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

  dialogSelected(contact: Contact): String {
    console.log(contact);
    this.onDialogSelected.emit(contact);
    return contact.name;
  }

}