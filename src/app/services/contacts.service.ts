import {Observable} from "rxjs";
import {User} from "../model/AuthInfo";

export class ContactsService {
  getContacts(): Observable<User[]> {
    return Observable.of([
      { id: 1, userName: 'Vasya' },
      { id: 2, userName: 'Petya' },
      { id: 3, userName: 'Kolya' },
    ])
  }
}