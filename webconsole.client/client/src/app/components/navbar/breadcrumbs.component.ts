import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
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
    
    constructor(private router: Router, private _breadcrumbsService: BreadcrumbsService) {
        this.router.subscribe(() => {
            _breadcrumbsService.clear();
            _breadcrumbsService.add(new Breadcrumb(['Bundles'], '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'));
            /*if (val.startsWith("bundles")) {
                _breadcrumbsService.add(new Breadcrumb(['bundles'], 'Bundles'));
            } else if (val.startsWith("services")) {
                _breadcrumbsService.add(new Breadcrumb(['services'], 'Services'));
            } else if (val.startsWith("packages")) {
                _breadcrumbsService.add(new Breadcrumb(['packages'], 'Packages'));
            } else if (val == "logs") {
                _breadcrumbsService.add(new Breadcrumb(['logs'], 'Logs'));
            } else {
                console.log(val);
            }*/
            this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
        });
    }
    
  
}