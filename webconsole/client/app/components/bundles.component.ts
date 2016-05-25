import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

import {BackendServices} from '../services/backend.service';
import {Bundle} from '../domain/bundle';

declare var jQuery:any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    templateUrl: 'app/html/bundles.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class BundlesComponent implements OnInit {

    bundles: Bundle[];

    constructor(private router: Router, private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    onSelect(bundle: Bundle) {
        this.router.navigate( ['Bundle', { id: bundle.id }]  );
    }

    ngOnInit() {
        console.log("oninit bundlesservice called!");
        this._backend.getBundles()
            .subscribe(res => this.bundles = res);
    }



}
