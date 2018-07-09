import {Dialog, Message} from "../model/Dialog";
import {Observable} from "rxjs";
import { of } from 'rxjs'
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class DialogService {

  constructor(private authService: AuthService) {
  }

  getDialogs(): Observable<Dialog[]> {
    return of([
      {
        contact: "John Smith",
        lastMessage: {
          text: "Here be last message. A very long-long message. A so long one.",
          from: "Nobody",
          to: "John Smith",
          date: new Date()
        }
      }
    ])
  }

  getDialog(contact: String): Observable<Message[]> {
    let messages: Array<Message> = [];
    const userName = this.authService.currentUser.user.userName;
    for (let i = 0; i < 20; i++) {
      const even: boolean = i % 2 == 0;
      const messageCount: number = Math.floor(Math.random() * 6 + 1);
      for (let i = 0; i < messageCount; i++) {
        messages.push(new Message(this.guid(), new Date(), even ? contact : userName, even ? userName : contact));
      }
    }
    return of(messages)
  }

  private guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}