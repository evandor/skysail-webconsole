import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {BackendServices} from '../services/backend.service';
import {Bundle} from '../domain/bundle';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/bundle.template.html',
    styleUrls:  ['app/js/datatables.css']
})
export class BundleComponent implements OnInit {

    bundle = {};
    
    isLoading = true;

    constructor(private _routeParams:RouteParams, private _backend: BackendServices) {
         _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        console.log("oninit bundlesservice called!");
        let id = this._routeParams.get('id');
        
        this._backend.getBundle(id)
            .subscribe(res => {
                this.bundle = res;
                this.isLoading = false;
                console.log(res);
            }
            );
    }
}
