import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../services/backend.service';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
import {AppGlobals} from '../services/appglobals.service';

import {Breadcrumb} from '../components/navbar/breadcrumb';
import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage';
import {RuntimeConfig} from '../domain/runtimeconfig';

import {PackagesFilter} from '../pipes/packagesFilter.pipe'

declare var jQuery: any;

@Component({
    selector: 'packages',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    pipes: [PackagesFilter],
    templateUrl: 'app/html/runtime.template.html'
})
export class RuntimeComponent implements OnInit {

    constructor(private router: Router, private _backend: BackendServices, private _appGlobals: AppGlobals) {}

    runtimeConfig: RuntimeConfig = new RuntimeConfig();

    ngOnInit() {
        this._appGlobals.setIsLoading(true);
        this._backend.getRuntimeConfig()
            .subscribe(res => {
                this.runtimeConfig = res;
                console.log(res.systemProperties);
                this._appGlobals.setIsLoading(false);
            });
    }

}