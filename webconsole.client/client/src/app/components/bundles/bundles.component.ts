import {Component, OnInit, ElementRef,ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

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

import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

//import {OrderByPipe} from 'fuel-ui/fuel-ui';

declare var jQuery: any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab, AdjacencyDirective,PercentBarDirective],
    providers: [BackendServices, BreadcrumbsService],
    templateUrl: 'app/html/bundles/bundles.template.html',
    pipes: [BundlesFilter, BundleStatePipe],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BundlesComponent implements OnInit, OnChanges {

    bundles: Bundle[];
    isLoading = true;
    searchId: string = "";
    //@Input() 
    //@LocalStorage() 
    public searchName: string = '';
    //@Output() searchNameChange = new EventEmitter();
    
    value: number;
    maxSize: number = 0;
    size: number;

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService) {}

    onSelect(bundle: Bundle) {
        this.router.navigate(['/bundles', bundle.id]);
        this._breadcrumbService.add(new Breadcrumb(['bundle'], "hier"));
    }

    ngOnInit() {
        this._backend.getBundles()
            .subscribe(res => {
                console.log("got bundles");
                this.bundles = res;
                err => this.logError(err);
                this.bundles.forEach(bundle => {
                    if (bundle.size > this.maxSize) {
                        this.maxSize = bundle.size;
                    }
                });
                this.isLoading=false;
            });
    }

    ngOnChanges(changes) {
        console.log("hier:" + changes);
    }

    clicked() {
        console.log("clicked");
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    getPercentChartSpanId(id: string) {
        return "chartSpanId_" + id;
    }
    
    setData(value, max, size) {
        this.value = value;
        this.maxSize = max;
        this.size = size;
    }

}
