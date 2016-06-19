import {Component} from '@angular/core';
import {Routes, RouterOutletMap} from '@angular/router';

import {FrameworkComponent} from './components/framework.component';
import {FooterComponent} from './components/footer.component';
import {BundlesComponent} from './components/bundles/bundles.component';
import {BundleComponent} from './components/bundles/bundle.component';
import {LogsComponent} from './components/logs.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceComponent} from './components/services/service.component';
import {PackagesComponent} from './components/packages.component'
import {HelpComponent} from './components/help.component';
import {SnapshotsComponent} from './components/snapshots/snapshots.component';
import {BarGraph} from './components/graph.component';

import {Navbar} from './components/navbar/navbar.component';
import {Breadcrumbs} from './components/navbar/breadcrumbs.component';

import {TimerWebsocketComponent} from './components/websockets/timerWS.component'
import {SMDropdown} from './directives/dropdown.directive';
import {D3Directive} from './directives/d3.directive'
import {PercentBarDirective} from './directives/percentBar.d3.directive'

@Routes([
    { path: '/framework', component: FrameworkComponent },
    { path: '/bundles', component: BundlesComponent },
    { path: '/bundles/:id', component: BundleComponent },
    { path: '/services', component: ServicesComponent },
    { path: '/services/:id', component: ServiceComponent },
    { path: '/packages', component: PackagesComponent },
    { path: '/logs', component: LogsComponent },
    // { path: '/graph',        as: 'Graph',     component: GraphComponent },
    { path: '/snapshots', component: SnapshotsComponent },
    { path: '/help', component: HelpComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    directives: [RouterOutletMap, FooterComponent, Navbar, Breadcrumbs, BarGraph, TimerWebsocketComponent, SMDropdown, D3Directive, PercentBarDirective]
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