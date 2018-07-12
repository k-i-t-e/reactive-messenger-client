import {Observable} from "rxjs";
import { of } from 'rxjs'
import {Contact, User} from "../model/AuthInfo";
import {Injectable} from "@angular/core";
import {map, tap} from "rxjs/operators";

@Injectable()
export class ContactService {
  private contacts: Array<User> = [
    new User(1, 'John Smith' ),
    new User(2, 'John Doe' ),
    new User(3, 'Charly Brown' )
  ];

  getContacts(): Observable<User[]> {
    return of(this.contacts)
  };

  private allUsers: Array<User> = [
    new User(4, 'John Lennon'),
    new User(5, 'Paul McCartney'),
    new User(6, 'Jorge Harrison'),
    new User(7, 'Ringo Starr')
  ];

  searchUsers(searchStr: string): Observable<Array<User>> {
    return of(this.allUsers.filter(u => u.userName.toLowerCase().startsWith(searchStr.toLowerCase())))
  }

  searchContacts(searchStr: string): Array<User> {
    return this.contacts.filter(u =>
      u.userName.toLowerCase()
        .split(' ')
        .filter(substr => substr.startsWith(searchStr.toLowerCase())).length > 0
    )
  }

  addContact(contact: Contact): Observable<User> {
    return of(contact).pipe(
      map(contact => new User(contact.id, contact.name)),
      tap(user => this.contacts.push(user)),
    );
  }
}