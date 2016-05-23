import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
//import {Location} from "angular2/platform/common";
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
          <a class="navbar-brand" href="/"><span class="glyphicon glyphicon-calendar green" aria-hidden="true"></span>&nbsp;skysail OSGi webconsole</a>
        </div>
        
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a [routerLink]="['Courses']">Courses <span class="sr-only">(current)</span></a></li>
              <li class="active"><a [routerLink]="['Spotify']">Spotify <span class="sr-only">(current)</span></a></li>
              <li class="active"><a [routerLink]="['Bundles']">Bundles <span class="sr-only">(current)</span></a></li>
            </ul>
            
            <!--<ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <button *ngIf="!authenticated" (click)="doLogin()" class="nav-link btn btn-danger-outline" href="#">Login</button>
                    <button *ngIf="authenticated" (click)="doLogout()" class="nav-link btn btn-success-outline" href="#">Logout {{userName}}</button>
                </li>
            </ul>-->
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

