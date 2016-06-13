import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

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

@RouteConfig([
    { path: '/framework',    as: 'Framework', component: FrameworkComponent },
    { path: '/bundles',      as: 'Bundles',   component: BundlesComponent, useAsDefault: true },
    { path: '/bundles/:id',  as: 'Bundle',    component: BundleComponent },
    { path: '/services',     as: 'Services',  component: ServicesComponent },
    { path: '/services/:id', as: 'Service',   component: ServiceComponent },
    { path: '/packages',     as: 'Packages',  component: PackagesComponent },
    { path: '/logs',         as: 'Logs',      component: LogsComponent },
   // { path: '/graph',        as: 'Graph',     component: GraphComponent },
    { path: '/snapshots',    as: 'Snapshots', component: SnapshotsComponent },
    { path: '/help',         as: 'Help',      component: HelpComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    directives: [RouterOutlet,RouterLink, FooterComponent,Navbar,Breadcrumbs, BarGraph,TimerWebsocketComponent, SMDropdown,D3Directive,PercentBarDirective]
})
export class AppComponent {
    
    name: string = "Ringo";
  names: string[] = ["John", "Paul", "George", "Ringo"];
    
    graphData: Array<number>;
    data: Array<number>;
    
    constructor() {
        this.graphData = [10,20,30,40,60];
        this.data = [4, 8, 15, 16, 23, 42];
    }
 }