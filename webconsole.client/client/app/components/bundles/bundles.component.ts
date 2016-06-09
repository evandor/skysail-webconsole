import {Component, OnInit, ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

import {BackendServices} from '../../services/backend.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {Breadcrumb} from '../../components/navbar/breadcrumb';
import {Bundle} from '../../domain/bundle';

import {BundleStatePipe} from '../../pipes/bundleState.pipe';
import {BundlesFilter} from '../../pipes/bundlesFilter.pipe'

declare var jQuery: any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices, BreadcrumbsService],
    templateUrl: 'app/html/bundles/bundles.template.html',
    pipes: [BundlesFilter, BundleStatePipe]
    //styleUrls:  ['app/js/datatables.css']
})
export class BundlesComponent implements OnInit {

    bundles: Bundle[];

    searchId: string = "";

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    onSelect(bundle: Bundle) {
        this.router.navigate(['Bundle', { id: bundle.id }]);
        this._breadcrumbService.add(new Breadcrumb(['Bundle'], "hier"));
    }

    ngOnInit() {
        console.log("oninit bundlesservice called!");
        this._backend.getBundles()
            .subscribe(res => {
                this.bundles = res;
                err => this.logError(err);
            });
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }



}
