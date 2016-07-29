import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../services/backend.service';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
import {AppGlobals} from '../services/appglobals.service';

import {Breadcrumb} from '../components/navbar/breadcrumb';
import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage'

import {PackagesFilter} from '../pipes/packagesFilter.pipe'

declare var jQuery: any;

@Component({
    selector: 'packages',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    pipes: [PackagesFilter],
    templateUrl: 'app/html/packages.template.html'
})
export class PackagesComponent implements OnInit {

    packages: ExportPackage[];
    public searchName: string = '';

    searchId: string = "";

    //isLoading = true;

    constructor(private router: Router, private _backend: BackendServices, private _appGlobals: AppGlobals) {}

    onSelectBundle(bundle: Bundle) {
        this.router.navigate(['Bundle', { id: bundle.id }]);
    }

    ngOnInit() {
        this._appGlobals.setIsLoading(true);
        this._backend.getPackages()
            .subscribe(res => {
                this.packages = res;
                this._appGlobals.setIsLoading(false);
            });
    }

}