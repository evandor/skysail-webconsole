import {Injectable} from '@angular/core'
import {Breadcrumb} from '../components/navbar/breadcrumb';

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: Breadcrumb[] = [];

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