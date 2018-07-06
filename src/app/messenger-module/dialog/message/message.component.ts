import {Component, Input, OnInit} from "@angular/core";
import {Message} from "../../model/Dialog";

@Component({
  selector: 'app-message',
  template: require('./message.component.html')
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() isMy: boolean;

  ngOnInit(): void {
    console.log(this.isMy)
  }
}