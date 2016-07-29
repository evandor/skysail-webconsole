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
import {RuntimeComponent} from './components/runtime.component';
import {BundleContentComponent} from './components/bundles/bundlecontent.component'
import {CodeMirrorComponent} from './components/codemirror.component'

import {ConfigComponent} from './components/config.component'

export const routes: RouterConfig = [
    { path: 'framework',    component: FrameworkComponent },
    { path: 'bundles/:id/contents/:file',  component: CodeMirrorComponent },
    { path: 'bundles/:id/contents',  component: BundleContentComponent },
    { path: 'bundles/:id',  component: BundleComponent },
    { path: 'bundles',      component: BundlesComponent },
    { path: 'services',     component: ServicesComponent },
    { path: 'services/:id', component: ServiceComponent },
    { path: 'packages',     component: PackagesComponent },
    { path: 'logs',         component: LogsComponent },
    { path: 'snapshots',    component: SnapshotsComponent },
    { path: 'runtime',      component: RuntimeComponent },
    { path: 'config',       component: ConfigComponent },
    { path: 'help',         component: HelpComponent },
    { path: '**',           component: BundlesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];