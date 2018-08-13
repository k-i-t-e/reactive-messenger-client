import {Dialog, Message} from "../model/Dialog";
import {Observable} from "rxjs";
import { of } from 'rxjs'
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {MESSENGER_API_ROOT_URL} from "./constants";
import {map} from "rxjs/operators";

class DialogVO {
  from: string;
  to: string;
  text?: string;
  date: Date
}

@Injectable()
export class DialogService {

  constructor(private authService: AuthService, private http: HttpClient) {}

  getDialogs(): Observable<Dialog[]> {
    return this.http.get<Result<Array<DialogVO>>>(MESSENGER_API_ROOT_URL + 'dialogs/', this.authService.getAuthHeaders()).pipe(
      map(resp => resp.payload.map(vo => {
        const msg: Message = new Message(vo.text, vo.date, vo.from, vo.to);
        return new Dialog(vo.from === this.authService.currentUser.user.userName ? vo.to : vo.from, msg);
      }))
    );
  }

  getDialog(contact: string): Observable<Message[]> {
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