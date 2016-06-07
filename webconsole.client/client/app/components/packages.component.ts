import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

import {BackendServices} from '../services/backend.service';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
import {Breadcrumb} from '../components/navbar/breadcrumb';
import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage'

declare var jQuery:any;

@Component({
    selector: 'packages',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices, BreadcrumbsService],
    templateUrl: 'app/html/packages.template.html'
})
export class PackagesComponent implements OnInit {
    
     packages: ExportPackage[];
    
    searchId: string = "";

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        this._backend.getPackages()
            .subscribe(res => this.packages = res);
    }

}