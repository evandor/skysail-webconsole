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
                        templateUrl: 'app/html/navbar.template.html'
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