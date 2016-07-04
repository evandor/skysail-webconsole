import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';

import {BackendServices} from '../../services/backend.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

import {Breadcrumb} from '../navbar/breadcrumb';

@Component({
    selector: 'breadcrumbs',
    directives: [ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BreadcrumbsService],
    templateUrl: 'app/html/navbar/breadcrumbs.template.html'
})
export class Breadcrumbs {

    breadcrumbs: Breadcrumb[];

    constructor(private router: Router, private _breadcrumbsService: BreadcrumbsService, private _route: ActivatedRoute) {
        this.router.events.subscribe(() => {
            _breadcrumbsService.clear();
            _breadcrumbsService.add(new Breadcrumb(['/bundles'], '<i class="fa fa-home" aria-hidden="true"></i>'));
            var val = this.router.url;
            var segements = val.split('/');
            segements.forEach(segment => {
                if (segment != '') {
                    _breadcrumbsService.add(new Breadcrumb([segment], segment));
                }
            });
            this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
        });
    }


}