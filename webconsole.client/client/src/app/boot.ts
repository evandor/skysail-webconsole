import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from '@angular/router'
import {HTTP_PROVIDERS} from '@angular/http'

//import {GraphComponent} from './components/graph.component'

import {CookieService} from './services/cookies.service'
import {AuthService} from './services/auth.service'
import {WindowService} from './services/window.service'

import {provide} from '@angular/core';

//import 'jquery';
//import 'semantic';

bootstrap(AppComponent,[CookieService, AuthService, WindowService, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(Window, {useValue: window})]);