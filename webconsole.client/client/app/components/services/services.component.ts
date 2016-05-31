import {Component, OnInit, ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {BackendServices} from '../../services/backend.service';
import {Service} from '../../domain/service';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "angular2/router";

//import {BundlesService} from '../services/bundles.service';

declare var jQuery:any;

@Component({
    selector: 'services',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    templateUrl: 'app/html/services/services.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class ServicesComponent implements OnInit {

    services: Service[];

    constructor(private router: Router, private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }
    
    onSelect(service: Service) {
        this.router.navigate( ['Service', { id: service.id }]  );
    }

    ngOnInit() {
        console.log("oninit services called!");
        this._backend.getServices()
            .subscribe(res => {
                this.services = res;
            });
    }

}