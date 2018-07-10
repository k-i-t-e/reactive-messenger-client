import {Component, EventEmitter, Output} from "@angular/core";
import {ContactService} from "../services/contact.service";
import {Contact} from "../model/AuthInfo";

@Component({
  selector: 'app-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.css')]
})
export class SearchComponent {
  searchStr: string;
  results: Array<Contact> = [];
  searchStarted = false;

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
  }
}