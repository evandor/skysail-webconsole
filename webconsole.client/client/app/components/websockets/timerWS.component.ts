import {Component} from 'angular2/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'

@Component({
    selector: 'timerwebsocket',
    template: `
	Counter Value is: {{counter}}
	<button type="button" (click)="subscribe($event)">Subscribe to WebSocket</button>
	`
})
export class TimerWebsocketComponent {
    counter: string = 'not known';
    ws: any; // $Websocket;

    constructor() {
        //this.ws = new $WebSocket("ws://localhost:8088/counter");
    }

    subscribe($event) {
        console.log("trying to subscribe to ws...");
        this.ws = new $WebSocket("ws://localhost:8088");
        this.ws.send("Hello");
        this.ws.getDataStream().subscribe(
            res => {
                var count = JSON.parse(res.data).value;
                console.log('Got: ' + count);
                this.counter = count;
            },
            function (e) { console.log('Error: ' + e.message); },
            function () { console.log('Completed'); }
        );
    }
}