import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material";


export interface ConfirmDialogData {
  title: string;
  text?: string;
}

@Component({
  template: require('./confirm-dialog.component.html')
})
export class ConfirmDialogComponent {
  title: string;
  text: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {
    this.title = data.title;
    this.text = data.text;
  }
}