import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';

import {BundleComponent} from '../../components/bundles/bundle.component';
import {AppGlobals} from '../../services/appglobals.service';

@Component({
    selector: 'navigation',
    templateUrl: 'app/html/navbar/navigation.template.html'
})
export class NavigationComponent { //implements OnInit {

    bundleIdList: string[] = [];
    currentId = "0";
    private sub: any;
    private routeParams: any;
    private prevExistsFlag:boolean = false;

    constructor(private _route: ActivatedRoute, private _appGlobals: AppGlobals, private _router: Router) {
        this._appGlobals._bundleIdList.subscribe(val => this.bundleIdList = val);
        this._appGlobals._routeParams.subscribe(val => this.routeParams = val);
    }

    ngOnInit() {
        console.log("ID" + this.routeParams['id']);
        if (this.routeParams['id'] === "undefined") {
            return false;
        }
        var currentBundleIndex = this.getCurrentBundleIndex();
        console.log(currentBundleIndex);
        if (currentBundleIndex == null || currentBundleIndex == 0) {
            return false;
        }
        return true;
    }

    prevExists() {
        return this.prevExistsFlag;
    }

    next() {
        var goto = "0";
        var index = 0;
        
        this.bundleIdList.forEach(id => {
            index += 1;
            if (id == this.routeParams['id']) {
                goto = this.bundleIdList[index];
            }
        });
        this._router.navigate(['/bundles', goto]);
    }

    prev() {
        var goto = "0";
        var index = 0;
        this.bundleIdList.forEach(id => {
            index += 1;
            if (id == this.routeParams['id']) {
                goto = this.bundleIdList[index-2];
            }
        });
        this._router.navigate(['/bundles', goto]);
    }

    getCurrentBundleIndex():number {
        var index = 0;
        this.bundleIdList.forEach(id => {
            index += 1;
            if (id == this.routeParams['id']) {
                return index;
            }
        });
        return null;
    }
}