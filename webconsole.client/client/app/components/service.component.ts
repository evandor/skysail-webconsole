import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {BackendServices} from '../services/backend.service';
import {Bundle} from '../domain/bundle';
import {Tabs} from '../components/tabs';
import {Tab} from '../components/tab';

@Component({
    selector: 'service',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel,Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/service.template.html'
})
export class ServiceComponent implements OnInit {

    service = {};
    isLoading = true;

    constructor(private _routeParams:RouteParams, private _backend: BackendServices) {
         _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        
        this._backend.getService(id)
            .subscribe(res => {
                this.service = res;
                this.isLoading = false;
            }
        );
    }
}
