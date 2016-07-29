import {Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../../services/backend.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {AppGlobals} from '../../services/appglobals.service';

import {Breadcrumb} from '../../components/navbar/breadcrumb';
import {Bundle} from '../../domain/bundle';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';
import {SubTab} from '../../components/subtab';

import {BundleStatePipe} from '../../pipes/bundleState.pipe';
import {BundlesFilter} from '../../pipes/bundlesFilter.pipe'

import {PercentBarDirective} from '../../directives/percentBar.d3.directive'
import {AdjacencyDirective} from '../../directives/adjacency.directive'
import {D3PkgDepDirective} from '../../directives/d3pkgDep.directive'
import {D3ServiceDepDirective} from '../../directives/d3serviceDep.directive'
import {D3BundleSizesDirective} from '../../directives/d3bundlesizes.directive'

declare var jQuery: any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel, Tabs, Tab, SubTab, AdjacencyDirective, D3PkgDepDirective,
        D3ServiceDepDirective,
        D3BundleSizesDirective, PercentBarDirective],
    providers: [BackendServices],
    templateUrl: 'app/html/bundles/bundles.template.html',
    pipes: [BundlesFilter, BundleStatePipe],
})
export class BundlesComponent implements OnInit, OnChanges {

    bundles: Bundle[];
    searchId: string = "";
    public searchName: string = '';
    filteredCount: number = 0;

    bundleIdList: string[] = [];

    value: number;
    maxSize: number = 0;
    size: number;

    //pageHelp: Map<string, boolean> = new Map<string, boolean>();
    hidePageHelpFor: string = '';

    constructor(private router: Router, private _backend: BackendServices, private _breadcrumbService: BreadcrumbsService, private _appGlobals: AppGlobals) {
        _appGlobals._filteredCount.subscribe(value => this.filteredCount = value);
       /* if (localStorage.getItem('help_bundles') == 'hide') {
            this.pageHelp.set('show_help_bundles', false);
        }*/
        this.hidePageHelpFor = localStorage.getItem('pageHelpBundles');
        if (this.hidePageHelpFor == null) {
            this.hidePageHelpFor = '';
            //localStorage.setItem('pageHelpBundles', this.hidePageHelpFor);
        }
    }

    onSelect(bundle: Bundle) {
        this.router.navigate(['/bundles', bundle.id]);
        this._breadcrumbService.add(new Breadcrumb(['bundle'], "hier"));
    }

    ngOnInit() {
        this._appGlobals.setIsLoading(true);
        this._backend.getBundles()
            .subscribe(res => {
                this.bundles = res;
                err => this.logError(err);
                this.bundles.forEach(bundle => {
                    this.bundleIdList.push(bundle.id);
                    if (bundle.size > this.maxSize) {
                        this.maxSize = bundle.size;
                    }
                });
                this._appGlobals.setBundleIdList(this.bundleIdList);
                this._appGlobals.setIsLoading(false);
            });
    }

    ngOnChanges(changes) {
        console.log("hier:" + changes);
    }

    getBarChartTitle(title: string) {
        return "<i class='fa fa-bar-chart'></i> " + title;
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
    
    isShown(id: string):boolean {
        var str = localStorage.getItem('pageHelpBundles') as string;
        if (str == null) {
            return true;
        }
        return (str.indexOf(","+id) === -1);
    }

    hidePermanently(id: string) {
        this.hidePageHelpFor += ","+id;
        localStorage.setItem('pageHelpBundles', this.hidePageHelpFor);
        //this.pageHelp.set('show_' + id, false);
    }

    showAllInlineHelp() {
        this.hidePageHelpFor = '';
        localStorage.removeItem('pageHelpBundles');
    }

}
