System.register(["@angular/core", "@angular/router", '../../services/backend.service', '../../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, router_1, backend_service_1, appglobals_service_1;
    var Navbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            Navbar = (function () {
                function Navbar(router, _backend, _appGlobals) {
                    this.router = router;
                    this._backend = _backend;
                    this._appGlobals = _appGlobals;
                    this.currentMenuItem = "Bundles";
                    this.loading = false;
                    //this._appGlobals.isLoading.subscribe(value => this.loading = value);
                    this.router.events.subscribe(function () {
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
                Navbar.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this._appGlobals.isLoadingObservable$.subscribe(function (value) { return _this.loading = value; });
                };
                Navbar.prototype.ngOnDestroy = function () {
                    // prevent memory leak when component is destroyed
                    this.subscription.unsubscribe();
                };
                Navbar.prototype.isLoading = function () {
                    console.log("isLoading: " + this.loading);
                    return this.loading;
                };
                Navbar.prototype.getBundlesMenuTitle = function () {
                    var bundlesCount;
                    //this._backend.getBundles().subscribe(res => bundlesCount = res.length);
                    return "Bundles"; //(" + bundlesCount + ")";
                };
                Navbar.prototype.checkActive = function (menuItem) {
                    if (menuItem == this.currentMenuItem) {
                        return "nav-item active";
                    }
                    return "nav-item";
                };
                Navbar.prototype.onSubmit = function () {
                    var _this = this;
                    this._backend.createSnapshot().subscribe(function (res) { return _this.res = res; });
                };
                Object.defineProperty(Navbar.prototype, "authenticated", {
                    get: function () {
                        return true; //this.authService.isAuthenticated();
                    },
                    enumerable: true,
                    configurable: true
                });
                Navbar.prototype.doLogin = function () {
                    //this.authService.doLogin();
                };
                Navbar.prototype.doLogout = function () {
                    //this.authService.doLogout();
                };
                Object.defineProperty(Navbar.prototype, "userName", {
                    get: function () {
                        return "admin"; //this.authService.getUserName();
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
                        providers: [backend_service_1.BackendServices],
                        pipes: [],
                        templateUrl: 'app/html/navbar/navbar.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices, appglobals_service_1.AppGlobals])
                ], Navbar);
                return Navbar;
            }());
            exports_1("Navbar", Navbar);
        }
    }
});

//# sourceMappingURL=navbar.component.js.map
