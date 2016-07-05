import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import {BarGraph} from './components/graph.component';

import {Navbar} from './components/navbar/navbar.component';
import {Breadcrumbs} from './components/navbar/breadcrumbs.component';
import {NavigationComponent} from './components/navbar/navigation.component';
import {FooterComponent} from './components/footer.component';

//import {TimerWebsocketComponent} from './components/websockets/timerWS.component'
//import {SMDropdown} from './directives/dropdown.directive';
//import {D3Directive} from './directives/d3.directive'
import {PercentBarDirective} from './directives/percentBar.d3.directive'

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    directives: [ROUTER_DIRECTIVES, FooterComponent, Navbar, NavigationComponent, Breadcrumbs,PercentBarDirective] //, RouterOutletMap, BarGraph, TimerWebsocketComponent, SMDropdown, D3Directive]
})
export class AppComponent {

    name: string = "Ringo";
    names: string[] = ["John", "Paul", "George", "Ringo"];

    graphData: Array<number>;
    data: Array<number>;

    constructor() {
        this.graphData = [10, 20, 30, 40, 60];
        this.data = [4, 8, 15, 16, 23, 42];
    }
}