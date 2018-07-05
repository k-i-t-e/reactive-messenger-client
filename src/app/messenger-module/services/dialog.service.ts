import {Dialog} from "../model/Dialog";
import {Observable} from "rxjs";
import { of } from 'rxjs'

export class DialogService {
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
}