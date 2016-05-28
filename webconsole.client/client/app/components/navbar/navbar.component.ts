import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {BackendServices} from '../../services/backend.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [BackendServices],
    pipes: [],
    templateUrl: 'app/html/navbar.template.html'
})
export class Navbar {
    
    res;
    
    constructor(private router: Router, private _backend: BackendServices) { 
         _backend.setBaseUrl('http://localhost:2002/');
    }

    onSubmit() {
        this._backend.createSnapshot().subscribe(res => this.res = res);
    }

    get authenticated() {
        return  true;//this.authService.isAuthenticated();
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

