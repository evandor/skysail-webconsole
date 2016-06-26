import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {BackendServices} from '../../services/backend.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [BackendServices],
    pipes: [],
    templateUrl: 'app/html/navbar/navbar.template.html'
})
export class Navbar {

    res;

    currentMenuItem: string = "Bundles";

    constructor(private router: Router, private _backend: BackendServices) {
 
        this.router.events.subscribe(() => {
            /*if (val.startsWith("bundles")) {
                this.currentMenuItem = "Bundles";
            } else if (val.startsWith("services")) {
                this.currentMenuItem = "Services";
            } else if (val.startsWith("packages")) {
                this.currentMenuItem = "Packages";
            } else if (val == "logs") {
                this.currentMenuItem = "Logs";
            } else if (val == "help") {
                this.currentMenuItem = "Help";
            } else {
                this.currentMenuItem = "Bundles";
            }*/
        });
    }

    getBundlesMenuTitle() {
        var bundlesCount: number;
        //this._backend.getBundles().subscribe(res => bundlesCount = res.length);
        return "Bundles";//(" + bundlesCount + ")";
    }

    checkActive(menuItem: string) {
        if (menuItem == this.currentMenuItem) {
            return "nav-item active";
        }
        return "nav-item";
    }

    onSubmit() {
        this._backend.createSnapshot().subscribe(res => this.res = res);
    }

    get authenticated() {
        return true;//this.authService.isAuthenticated();
    }

    doLogin() {
        //this.authService.doLogin();
    }

    doLogout() {
        //this.authService.doLogout();
    }

    get userName() {
        return "admin";//this.authService.getUserName();
    }

    get page() {
        return "";//this.location.path().split('/')[1];
    }
}

