import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "@angular/router-deprecated";

import {BackendServices} from '../../services/backend.service';
import {Bundle} from '../../domain/bundle';
import {KeyValue} from '../../domain/keyValue';
import {Service} from '../../domain/service';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {DerpPipe} from '../../pipes/derp.pipe';

@Component({
    selector: 'service',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel,Tabs, Tab],
    pipes: [DerpPipe],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/services/service.template.html'
})
export class ServiceComponent implements OnInit {

    isLoading = true;
    service: Service = new Service();
    properties: KeyValue[] = [];
    usingBundles: Bundle[] = [];

    constructor(private router: Router, private _routeParams:RouteParams, private _backend: BackendServices) {
         _backend.setBaseUrl('http://localhost:2002/');
    }

    onSelect(bundle: Bundle) {
        this.router.navigate( ['Bundle', { id: bundle.id }]  );
    }
    
    ngOnInit() {
        let id = this._routeParams.get('id');
        
        this._backend.getService(id)
            .subscribe(res => {
                this.service = res;
                var props = <Map<string,string>>res.properties;
                for (var key in props) {
                    this.properties.push(new KeyValue(key,props[key]));
                };
                this.usingBundles = <Bundle[]>res.usingBundles;
                this.isLoading = false;
            }
        );
    }
}
