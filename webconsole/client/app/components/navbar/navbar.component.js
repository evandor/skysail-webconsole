System.register(["angular2/core", "angular2/router", '../../services/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1;
    var Navbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            Navbar = (function () {
                function Navbar(router, authService) {
                    this.router = router;
                    this.authService = authService;
                }
                Object.defineProperty(Navbar.prototype, "authenticated", {
                    get: function () {
                        return this.authService.isAuthenticated();
                    },
                    enumerable: true,
                    configurable: true
                });
                Navbar.prototype.doLogin = function () {
                    this.authService.doLogin();
                };
                Navbar.prototype.doLogout = function () {
                    this.authService.doLogout();
                };
                Object.defineProperty(Navbar.prototype, "userName", {
                    get: function () {
                        return this.authService.getUserName();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Navbar.prototype, "page", {
                    get: function () {
                        return ""; //this.location.path().split('/')[1];
                    },
                    enumerable: true,
                    configurable: true
                });
                Navbar = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [],
                        template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\"><span class=\"glyphicon glyphicon-calendar green\" aria-hidden=\"true\"></span>&nbsp;skysail OSGi webconsole</a>\n        </div>\n        \n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a [routerLink]=\"['Courses']\">Courses <span class=\"sr-only\">(current)</span></a></li>\n              <li class=\"active\"><a [routerLink]=\"['Spotify']\">Spotify <span class=\"sr-only\">(current)</span></a></li>\n              <li class=\"active\"><a [routerLink]=\"['Bundles']\">Bundles <span class=\"sr-only\">(current)</span></a></li>\n            </ul>\n            \n            <!--<ul class=\"nav navbar-nav pull-xs-right\">\n                <li class=\"nav-item\">\n                    <button *ngIf=\"!authenticated\" (click)=\"doLogin()\" class=\"nav-link btn btn-danger-outline\" href=\"#\">Login</button>\n                    <button *ngIf=\"authenticated\" (click)=\"doLogout()\" class=\"nav-link btn btn-success-outline\" href=\"#\">Logout {{userName}}</button>\n                </li>\n            </ul>-->\n        </div>\n      </div>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
                ], Navbar);
                return Navbar;
            }());
            exports_1("Navbar", Navbar);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map