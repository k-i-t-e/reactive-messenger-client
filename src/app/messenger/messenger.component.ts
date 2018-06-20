import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-messenger',
    template: require('./messenger.component.html'),
    styles:   [ require('./messenger.component.css') ]
})
export class MessengerComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

}