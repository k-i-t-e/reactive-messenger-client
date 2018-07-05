import {Component, Input, OnInit} from "@angular/core";
import {Contact} from "../model/AuthInfo";

@Component({
  selector: 'app-dialog',
  template: require('./dialog.component.html')
})
export class DialogComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit(): void {
  }
}