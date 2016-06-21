import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";

import {BackendServices} from '../services/backend.service';

import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';

import {MaxLengthPipe} from '../pipes/maxLength.pipe';

declare var jQuery:any;

@Component({
    selector: 'logs',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    pipes: [MaxLengthPipe],
    templateUrl: 'app/html/logs.template.html'
})
export class LogsComponent implements OnInit {

    logs: LogEntry[];

    constructor(private router: Router, private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }
    
    onSelectService(service: Service) {
        this.router.navigate( ['Service', { id: service.id }]  );
    }



    ngOnInit() {
        console.log("oninit bundlesservice called!");
        this._backend.getLogs()
            .subscribe(res => this.logs = res);
    }



}
