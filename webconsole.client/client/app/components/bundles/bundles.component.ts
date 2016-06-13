import {Component, OnInit, ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

import {BackendServices} from '../../services/backend.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {Breadcrumb} from '../../components/navbar/breadcrumb';
import {Bundle} from '../../domain/bundle';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {BundleStatePipe} from '../../pipes/bundleState.pipe';
import {BundlesFilter} from '../../pipes/bundlesFilter.pipe'

import {PercentBarDirective} from '../../directives/percentBar.d3.directive'
import {AdjacencyDirective} from '../../directives/adjacency.directive'


declare var jQuery: any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel,PercentBarDirective, Tabs, Tab, AdjacencyDirective],
    providers: [BackendServices, BreadcrumbsService],
    templateUrl: 'app/html/bundles/bundles.template.html',
    pipes: [BundlesFilter, BundleStatePipe]
})
export class BundlesComponent implements OnInit {

    bundles: Bundle[];

    searchId: string = "";
    
    value: number;
    maxSize: number = 0;
    size: number;

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    onSelect(bundle: Bundle) {
        this.router.navigate(['Bundle', { id: bundle.id }]);
        this._breadcrumbService.add(new Breadcrumb(['Bundle'], "hier"));
    }

    ngOnInit() {
        this._backend.getBundles()
            .subscribe(res => {
                this.bundles = res;
                err => this.logError(err);
                this.bundles.forEach(bundle => {
                    if (bundle.size > this.maxSize) {
                        this.maxSize = bundle.size;
                    }
                });
            });
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    getPercentChartSpanId(id: string) {
        return "chartSpanId_" + id;
    }
    
    setData(value, max, size) {
        this.value = value;
        this.max = max;
        this.size = size;
    }

}
