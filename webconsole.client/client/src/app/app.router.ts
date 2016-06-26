import { provideRouter, RouterConfig } from '@angular/router';

import {FrameworkComponent} from './components/framework.component';
import {BundlesComponent} from './components/bundles/bundles.component';
import {BundleComponent} from './components/bundles/bundle.component';
import {LogsComponent} from './components/logs.component';
import {ServicesComponent} from './components/services/services.component';
import {ServiceComponent} from './components/services/service.component';
import {PackagesComponent} from './components/packages.component'
import {HelpComponent} from './components/help.component';
import {SnapshotsComponent} from './components/snapshots/snapshots.component';

export const routes: RouterConfig = [
    { path: 'framework',    component: FrameworkComponent },
    { path: 'bundles',      component: BundlesComponent },
    { path: 'bundles/:id',  component: BundleComponent },
    { path: 'services',     component: ServicesComponent },
    { path: 'services/:id', component: ServiceComponent },
    { path: 'packages',     component: PackagesComponent },
    { path: 'logs',         component: LogsComponent },
    { path: 'snapshots',    component: SnapshotsComponent },
    { path: 'help',         component: HelpComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];