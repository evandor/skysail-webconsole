import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {FooterComponent} from './components/footer.component';
import {BundlesComponent} from './components/bundles.component';
import {ServicesComponent} from './components/services.component';

import {Navbar} from './components/navbar/navbar.component';

@RouteConfig([
    { path: '/', as: 'Bundles', component: BundlesComponent },
    { path: '/services', as: 'Services', component: ServicesComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    directives: [RouterOutlet,RouterLink, FooterComponent,Navbar]
})
export class AppComponent { }