import {
  AfterContentChecked, AfterViewChecked, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {Contact} from "../model/AuthInfo";
import {DialogService} from "../services/dialog.service";
import {Message} from "../model/Dialog";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-dialog',
  template: require('./dialog.component.html'),
  styles:   [ require('./dialog.component.css') ]
})
export class DialogComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() contact: Contact;
  @ViewChild('messagesContainer')
  messagesContainer: ElementRef;

  messages: Array<Message> = [];
  currentUserName: string;
  doScrollEnd: boolean = false;
  oldHeight: number;

  constructor(private dialogService: DialogService, private authService: AuthService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.currentUserName = this.authService.currentUser.user.userName
  }

  ngOnChanges(changes: SimpleChanges): void {
    const contact: SimpleChange = changes.contact;
    this.dialogService.getDialog((<Contact> contact.currentValue).name).subscribe(messages => {
      console.log(messages);
      this.messages = messages;
      this.doScrollEnd = true;
    })
  }

  ngAfterViewChecked(): void {
    const container = <HTMLDivElement> this.messagesContainer.nativeElement;
    if (this.doScrollEnd) { // scroll to end when first portion of messages loaded
      container.scrollTop = container.scrollHeight;
      this.doScrollEnd = false;
    }

    if (this.oldHeight) { // restore scroll position after adding new fetched messages
      const position = container.scrollHeight - this.oldHeight;
      this.oldHeight = null;
      console.log(position);
      container.scrollTop = position;
    }
  }

  onContainerScroll(): void {
    const container = <HTMLDivElement> this.messagesContainer.nativeElement;
    if (container.scrollTop == 0) { // Load new portion of messages when chat is scrolled to the top
      this.dialogService.getDialog((<Contact> this.contact).name).subscribe(messages => {
        this.messages = messages.concat(this.messages);
        this.changeDetector.markForCheck();
        this.oldHeight = container.scrollHeight
      })
    }
  }
}