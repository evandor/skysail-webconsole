import {Injectable} from 'angular2/core'
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

/*import {Http, Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Bundle} from '../domain/bundle';
import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';*/
import {Breadcrumb} from '../components/navbar/breadcrumb';

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: Breadcrumb[];

    constructor() {
        console.log("in breadcrumbsservice constructor");
        this.breadcrumbs = [];
        this.breadcrumbs.push(new Breadcrumb(['Bundles'], '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'));
    }
    
    getBreadcrumbs() : Breadcrumb[] {
        return this.breadcrumbs;
    }

    clear() {
        this.breadcrumbs = [];
    }

    add(breadcrumb: Breadcrumb) {
        this.breadcrumbs.push(breadcrumb);
    }
}