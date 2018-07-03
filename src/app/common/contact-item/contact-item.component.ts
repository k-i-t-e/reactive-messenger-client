import {Component, Input} from "@angular/core";
import {Contact} from "../../model/AuthInfo";

@Component({
  selector: 'app-contact-item',
  template: require('./contact-item.component.html'),
  styles:   [ require('./contact-item.component.css') ]
})
export class ContactItemComponent {
  @Input() item: Contact
}