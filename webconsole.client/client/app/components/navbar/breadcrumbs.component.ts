import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';

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
    
    constructor(private router: Router, private _breadcrumbsService: BreadcrumbsService) {
        this.router.subscribe(val => {
            _breadcrumbsService.clear();
            _breadcrumbsService.add(new Breadcrumb(['Bundles'], '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'));
            if (val.startsWith("bundles")) {
                _breadcrumbsService.add(new Breadcrumb(['Bundles'], 'Bundles'));
            } else if (val.startsWith("services")) {
                _breadcrumbsService.add(new Breadcrumb(['Services'], 'Services'));
            } else if (val.startsWith("packages")) {
                _breadcrumbsService.add(new Breadcrumb(['Packages'], 'Packages'));
            } else if (val == "logs") {
                _breadcrumbsService.add(new Breadcrumb(['Logs'], 'Logs'));
            } else {
                console.log(val);
            }
            this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
        });
    }
    
  
}