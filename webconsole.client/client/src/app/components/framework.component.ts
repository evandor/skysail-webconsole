import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {BackendServices} from '../services/backend.service';
import {Bundle} from '../domain/bundle';
import {Tabs} from '../components/tabs';
import {Tab} from '../components/tab';

@Component({
    selector: 'bundle',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel,Tabs, Tab],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/bundles/bundle.template.html'
})
export class FrameworkComponent implements OnInit {

    framework = {};
    isLoading = true;

    constructor(private _routeParams:RouteParams, private _backend: BackendServices) {
         _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        
        this._backend.getFramework()
            .subscribe(res => {
                this.framework = res;
                this.isLoading = false;
                console.log("Framework: " + this.framework);
                //this.bundle.setManifestHeaders(this.objToStrMap(res.manifestHeaders));
            }
        );
    }
    
   
}
