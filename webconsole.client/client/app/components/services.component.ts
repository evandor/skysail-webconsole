import {Component, OnInit, ElementRef} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';
import {BackendServices} from '../services/backend.service';
import {Service} from '../domain/service';

//import {BundlesService} from '../services/bundles.service';

declare var jQuery:any;

@Component({
    selector: 'services',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    templateUrl: 'app/html/services.template.html',
    //styleUrls:  ['app/js/datatables.css']
})
export class ServicesComponent implements OnInit {

    services: Service[];

    constructor(private _elementRef: ElementRef, private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        console.log("oninit services called!");
        this._backend.getServices()
            .subscribe(res => {
                this.services = res;
                console.log(res);
            });
    }

}
