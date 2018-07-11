import {Observable} from "rxjs";
import { of } from 'rxjs'
import {Contact, User} from "../model/AuthInfo";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
  private contacts: Array<User> = [
    new User(1, 'John Smith' ),
    { id: 2, userName: 'John Doe' },
    { id: 3, userName: 'Charly Brown' },
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

  searchContacts(searchStr: string): Observable<Array<User>> {
    return of(this.contacts.filter(u => u.userName.toLowerCase().startsWith(searchStr.toLowerCase())))
  }
}