System.register(["@angular/core", "@angular/router", '../../services/backend.service', '../../services/appglobals.service', '../../services/breadcrumbs.service', '../../components/navbar/breadcrumbs.component', '../navbar/breadcrumb'], function(exports_1, context_1) {
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
    var core_1, router_1, backend_service_1, appglobals_service_1, breadcrumbs_service_1, breadcrumbs_component_1, breadcrumb_1;
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
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
            },
            function (breadcrumbs_component_1_1) {
                breadcrumbs_component_1 = breadcrumbs_component_1_1;
            },
            function (breadcrumb_1_1) {
                breadcrumb_1 = breadcrumb_1_1;
            }],
        execute: function() {
            Navbar = (function () {
                function Navbar(_router, _backend, _appGlobals, _breadcrumbsService) {
                    var _this = this;
                    this._router = _router;
                    this._backend = _backend;
                    this._appGlobals = _appGlobals;
                    this._breadcrumbsService = _breadcrumbsService;
                    this.currentMenuItem = "Bundles";
                    this.loading = false;
                    this.bundleIdList = [];
                    this.currentId = "0";
                    this.prevExistsFlag = false;
                    this._appGlobals._isLoading.subscribe(function (value) { return _this.loading = value; });
                    this._appGlobals._bundleIdList.subscribe(function (val) { return _this.bundleIdList = val; });
                    this._appGlobals._routeParams.subscribe(function (val) { return _this.routeParams = val; });
                    this._appGlobals._backendUrl.subscribe(function (val) { return _this.backendUrl = val; });
                    this._router.events.subscribe(function () {
                        _breadcrumbsService.clear();
                        _breadcrumbsService.add(new breadcrumb_1.Breadcrumb(['/bundles'], '<i class="fa fa-home" aria-hidden="true"></i>'));
                        var val = _this._router.url;
                        var segements = val.split('/');
                        segements.forEach(function (segment) {
                            if (segment != '') {
                                _breadcrumbsService.add(new breadcrumb_1.Breadcrumb([segment], segment));
                            }
                        });
                        _this.breadcrumbs = _breadcrumbsService.getBreadcrumbs();
                    });
                }
                Navbar.prototype.isLoading = function () {
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
                Navbar.prototype.next = function () {
                    this._router.navigate(['/bundles', this.getCurrentBundleIndex(this.routeParams['id']) + 1]);
                };
                Navbar.prototype.prev = function () {
                    this._router.navigate(['/bundles', this.getCurrentBundleIndex(this.routeParams['id']) - 1]);
                };
                Navbar.prototype.rawData = function () {
                    return this.backendUrl + "backend/v1/bundles";
                };
                Navbar.prototype.getCurrentBundleIndex = function (routeParamId) {
                    var index = 0;
                    var goto = 0;
                    this.bundleIdList.forEach(function (id) {
                        if (id == routeParamId) {
                            goto = index;
                        }
                        index += 1;
                    });
                    return goto;
                };
                Navbar = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        directives: [router_1.ROUTER_DIRECTIVES, breadcrumbs_component_1.Breadcrumbs],
                        providers: [backend_service_1.BackendServices],
                        pipes: [],
                        templateUrl: 'app/html/navbar/navbar.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices, appglobals_service_1.AppGlobals, breadcrumbs_service_1.BreadcrumbsService])
                ], Navbar);
                return Navbar;
            }());
            exports_1("Navbar", Navbar);
        }
    }
});

//# sourceMappingURL=navbar.component.js.map
