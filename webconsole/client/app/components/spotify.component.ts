import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, RequestOptions, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {CoursesService} from '../services/courses.service'
import {CookieService} from '../services/cookies.service'
import {AuthService} from '../services/auth.service'
import {BackendServices} from '../services/backend.service'
import {WindowService} from '../services/window.service'

import {Navbar} from './navbar/navbar.component';

@Component({
    templateUrl: 'app/html/spotify.template.html',
    directives: [Navbar],
    providers: [HTTP_PROVIDERS, CoursesService, BackendServices, BackendServices, CookieService, AuthService, WindowService, Navbar]
})
export class SpotifyComponent  {
    
    constructor(private  cookies:CookieService, private authService:AuthService) {
        //console.log("Public instantiated");
    }

    get idCookie() {
        return "";//this.cookies.getCookie('id');
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

}