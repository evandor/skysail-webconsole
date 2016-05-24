import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {AuthService} from '../../services/auth.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [],
    template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img src="app/img/skysail.logo.png" height="20px" style="padding-left:5px;">&nbsp;OSGi webconsole</a>
        </div>
        
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a [routerLink]="['Courses']">Courses <span class="sr-only">(current)</span></a></li>
              <li class="active"><a [routerLink]="['Bundles']">Bundles <span class="sr-only">(current)</span></a></li>
            </ul>
        </div>
      </div>
    </nav>
    `
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

