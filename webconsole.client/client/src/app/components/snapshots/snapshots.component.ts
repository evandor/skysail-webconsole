import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, RouteParams, Router} from "@angular/router-deprecated";

import {BackendServices} from '../../services/backend.service';
import {Snapshot} from '../../domain/snapshot';

declare var jQuery:any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    templateUrl: 'app/html/snapshots.template.html'
})
export class SnapshotsComponent implements OnInit {

    snapshots: Snapshot[];

    constructor(private router: Router, private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }

    ngOnInit() {
        this._backend.getSnapshots()
            .subscribe(res => this.snapshots = res);
    }



}
