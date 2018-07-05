import {Observable} from "rxjs";
import { of } from 'rxjs'
import {User} from "../model/AuthInfo";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
  getContacts(): Observable<User[]> {
    return of([
      { id: 1, userName: 'John Smith' },
      { id: 2, userName: 'John Doe' },
      { id: 3, userName: 'Charly Brown' },
    ])
  }
}