import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {FrameworkComponent} from './components/framework.component';
import {FooterComponent} from './components/footer.component';
import {BundlesComponent} from './components/bundles/bundles.component';
import {BundleComponent} from './components/bundles/bundle.component';
import {LogsComponent} from './components/logs.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceComponent} from './components/services/service.component';
import {SnapshotsComponent} from './components/snapshots/snapshots.component';
import {HelpComponent} from './components/help.component';

import {Navbar} from './components/navbar/navbar.component';

@RouteConfig([
    { path: '/framework',    as: 'Framework', component: FrameworkComponent },
    { path: '/bundles',      as: 'Bundles',   component: BundlesComponent, useAsDefault: true },
    { path: '/bundles/:id',  as: 'Bundle',    component: BundleComponent },
    { path: '/services',     as: 'Services',  component: ServicesComponent },
    { path: '/services/:id', as: 'Service',   component: ServiceComponent },
    { path: '/logs',         as: 'Logs',      component: LogsComponent },
    { path: '/snapshots',    as: 'Snapshots', component: SnapshotsComponent },
    { path: '/help',         as: 'Help', component: HelpComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    directives: [RouterOutlet,RouterLink, FooterComponent,Navbar]
})
export class AppComponent { }