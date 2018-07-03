import {Observable} from "rxjs/Observable";
import {Dialog} from "../model/Dialog";

export class DialogService {
  getDialogs(): Observable<Dialog[]> {
    return Observable.of([
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
}