import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";


@Component({
    selector: 'breadcrumbs',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/html/navbar/breadcrumbs.template.html'
})
export class Breadcrumbs {
}