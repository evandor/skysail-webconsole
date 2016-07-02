import {Injectable} from '@angular/core'
import {Breadcrumb} from '../components/navbar/breadcrumb';

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: Breadcrumb[];

    constructor() {
        console.log("in breadcrumbsservice constructor");
        this.breadcrumbs = [];
        //this.breadcrumbs.push(new Breadcrumb(['bundles'], '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'));
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