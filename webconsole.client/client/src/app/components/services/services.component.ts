import {Component, OnInit, ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {BackendServices} from '../../services/backend.service';
import {Service} from '../../domain/service';
import {Bundle} from '../../domain/bundle';
import {ROUTER_DIRECTIVES, RouteSegment, Router} from "@angular/router";

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
    
    onSelectBundle(bundle: Bundle) {
        this.router.navigate( ['Bundle', { id: bundle.id }]  );
    }

    ngOnInit() {
        console.log("oninit services called!");
        this._backend.getServices()
            .subscribe(res => {
                this.services = res;
            });
    }

}
