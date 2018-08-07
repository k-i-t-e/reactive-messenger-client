import {Observable} from "rxjs";
import { of } from 'rxjs'
import {Contact, User} from "../model/AuthInfo";
import {Injectable} from "@angular/core";
import {map, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {AUTH_API_ROOT_URL} from "./constants";

@Injectable()
export class ContactService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  private contacts: Array<User> = [];

  getContacts(): Observable<User[]> {
    return this.http.get<Result<Array<User>>>(AUTH_API_ROOT_URL + 'user/contacts', this.getAuthHeaders()).pipe(
      map(contacts => contacts.payload),
      tap(contacts => this.contacts = contacts)
    );
  };

  /*private allUsers: Array<User> = [
    new User(4, 'John Lennon'),
    new User(5, 'Paul McCartney'),
    new User(6, 'Jorge Harrison'),
    new User(7, 'Ringo Starr')
  ];*/

  searchUsers(searchStr: string): Observable<Array<User>> {
    return this.http.get<Result<Array<User>>>(AUTH_API_ROOT_URL + 'users', {
      headers: new HttpHeaders({'X-Auth-Token': this.authService.currentUser.token}),
      params: new HttpParams().set('name', searchStr)
    }).pipe(
      map(result => result.payload)
    );
    //return of(this.allUsers.filter(u => u.userName.toLowerCase().startsWith(searchStr.toLowerCase())))
  }

  searchContacts(searchStr: string): Array<User> {
    return this.contacts.filter(u =>
      u.userName.toLowerCase()
        .split(' ')
        .filter(substr => substr.startsWith(searchStr.toLowerCase())).length > 0
    )
  }

  addContact(contact: Contact): Observable<User> {
    return this.http.put<Result<Boolean>>(AUTH_API_ROOT_URL + "user/contacts/" + contact.id, null, this.getAuthHeaders())
      .pipe(
        map(result => result.status == 'OK' ? new User(contact.id, contact.name) : null),
        tap(user => {
          if (user != null)
            this.contacts.push(user)
        }),
      );
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({'X-Auth-Token': this.authService.currentUser.token})
    }
  }
}