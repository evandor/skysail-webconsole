import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'

//import {GraphComponent} from './components/graph.component'

import {CookieService} from './services/cookies.service'
import {AuthService} from './services/auth.service'
import {WindowService} from './services/window.service'

import {provide} from 'angular2/core';

bootstrap(AppComponent,[CookieService, AuthService, WindowService, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(Window, {useValue: window})]);