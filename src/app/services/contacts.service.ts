import {Observable} from "rxjs";
import {User} from "../model/AuthInfo";

export class ContactsService {
  getContacts(): Observable<User[]> {
    return Observable.of([
      { id: 1, userName: 'John Smith' },
      { id: 2, userName: 'John Doe' },
      { id: 3, userName: 'Charly Brown' },
    ])
  }
}