import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";

import {BackendServices} from '../services/backend.service';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
import {Breadcrumb} from '../components/navbar/breadcrumb';
import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage'

declare var jQuery: any;

@Component({
    selector: 'packages',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices, BreadcrumbsService],
    templateUrl: 'app/html/packages.template.html'
})
export class PackagesComponent implements OnInit {

    packages: ExportPackage[];

    searchId: string = "";

    isLoading = true;

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    onSelectBundle(bundle: Bundle) {
        this.router.navigate(['Bundle', { id: bundle.id }]);
    }

    ngOnInit() {
        this._backend.getPackages()
            .subscribe(res => {
                this.packages = res;
                this.isLoading = false;
            });
    }

}