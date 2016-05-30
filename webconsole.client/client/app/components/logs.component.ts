import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

import {BackendServices} from '../services/backend.service';

import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';

declare var jQuery:any;

@Component({
    selector: 'logs',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
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
