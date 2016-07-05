import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {HTTP_PROVIDERS} from '@angular/http';

import {BackendServices} from '../../services/backend.service';
import {AppGlobals} from '../../services/appglobals.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

import {Bundle} from '../../domain/bundle';
import {Breadcrumb} from '../navbar/breadcrumb';

import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {KeyValue} from '../../domain/keyValue';
import {ImportPackage} from '../../domain/importPackage';
import {Service} from '../../domain/service';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/bundles/bundlecontent.template.html',
})
export class BundleContentComponent implements OnInit {

    private sub: any;

    bundle: Bundle = new Bundle();

    constructor(
        private _backend: BackendServices,
        private _route: ActivatedRoute,
        private _router: Router,
        private _appGlobals: AppGlobals) { }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];

            this._backend.getBundleContents(id)
                .subscribe(res => {
                    this._appGlobals.setIsLoading(true);
                    this.bundle = res;
                    this._appGlobals.setIsLoading(false);
                });
        });
    }

    showFileContents(bundleId: string, path: string) {
        var base = '/bundles/' + bundleId + '/contents/';
        this._router.navigate([base,window.btoa(path)]);
    }
}