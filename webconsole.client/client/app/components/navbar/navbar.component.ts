import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {AuthService} from '../../services/auth.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [],
    templateUrl: 'app/html/navbar.template.html'
})
export class Navbar {
    constructor( private router:Router, private authService:AuthService) { // private location:Location,
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

    doLogin() {
        this.authService.doLogin();
    }

    doLogout() {
        this.authService.doLogout();
    }

    get userName() {
        return this.authService.getUserName();
    }

    get page() {
        return "";//this.location.path().split('/')[1];
    }
}

