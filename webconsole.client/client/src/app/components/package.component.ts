import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";

import {BackendServices} from '../services/backend.service';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
import {AppGlobals} from '../services/appglobals.service';

import {Breadcrumb} from '../components/navbar/breadcrumb';
import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage'

import {PackagesFilter} from '../pipes/packagesFilter.pipe'

@Component({
    selector: 'package',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    pipes: [PackagesFilter],
    templateUrl: 'app/html/package.template.html'
})
export class PackageComponent implements OnInit {

    packages: ExportPackage[];
    public searchName: string = '';

    searchId: string = "";
    
    private sub: any;

    constructor(
        private router: Router, 
        private _route: ActivatedRoute,
        private _backend: BackendServices, 
        private _appGlobals: AppGlobals) {}

    onSelectBundle(bundle: Bundle) {
        this.router.navigate(['Bundle', { id: bundle.id }]);
    }

    ngOnInit() {
        this._appGlobals.setIsLoading(true);
        
        this.sub = this._route.params.subscribe(params => {
            this._appGlobals.setRouteParams(params);
            let pkgNamePart = params['id'];
            this._backend.getMatchingPackages(pkgNamePart)
            .subscribe(res => {
                this.packages = res;
                this._appGlobals.setIsLoading(false);
            });
        });
        
        
    }

}