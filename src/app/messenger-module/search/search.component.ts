import {Component} from "@angular/core";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.css')]
})
export class SearchComponent {
  searchStr: string;
  constructor(private contactService: ContactService) {}
}