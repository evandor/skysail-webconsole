import {Component, OnInit, ElementRef, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel, NgForm} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../services/backend.service';

import {BackendConfig} from '../domain/backendconfig';

@Component({
    selector: 'config',
    providers: [BackendServices],
    templateUrl: 'app/html/config.template.html'
})
export class ConfigComponent {

    version: string;

    model = new BackendConfig('evandor', 'none', 'http://localhost:8080');
    submitted = false;
    onSubmit() { this.submitted = true; }

    constructor(private _backend: BackendServices) {}

    ngOnInit() {
            this._backend.getVersion()
            .subscribe(res => this.version = res);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    showFormControls(form: NgForm) {

        return form && form.controls['endpoint'] && form.controls['endpoint'].value;
    }
}