import {Component, OnInit,ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {BackendServices} from '../../services/backend.service';
import {Bundle} from '../../domain/bundle';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {NewlinePipe} from '../../pipes/newline.pipe';
import {ValuesPipe} from '../../pipes/values.pipe';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel,Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    pipes: [NewlinePipe, ValuesPipe],
    templateUrl: 'app/html/bundles/bundle.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class BundleComponent implements OnInit {

    bundle = {};
    
    isLoading = true;

    constructor(private _routeParams:RouteParams, private _backend: BackendServices) {
       _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        console.log("oninit bundlesservice called!");
        let id = this._routeParams.get('id');
        
        this._backend.getBundle(id)
            .subscribe(res => {
                this.bundle = res;
                this.isLoading = false;
                console.log("BundleDetails: " + res.manifestHeaders);
                //this.bundle.setManifestHeaders(this.objToStrMap(res.manifestHeaders));
            }
        );
    }
    
    objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}
