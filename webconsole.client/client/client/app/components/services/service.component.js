System.register(['@angular/core', '@angular/common', '@angular/http', "@angular/router", '../../services/backend.service', '../../services/appglobals.service', '../../domain/keyValue', '../../domain/service', '../../components/tabs', '../../components/tab', '../../pipes/derp.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1, backend_service_1, appglobals_service_1, keyValue_1, service_1, tabs_1, tab_1, derp_pipe_1;
    var ServiceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            function (keyValue_1_1) {
                keyValue_1 = keyValue_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (derp_pipe_1_1) {
                derp_pipe_1 = derp_pipe_1_1;
            }],
        execute: function() {
            ServiceComponent = (function () {
                function ServiceComponent(router, route, _backend, _appGlobals) {
                    this.router = router;
                    this.route = route;
                    this._backend = _backend;
                    this._appGlobals = _appGlobals;
                    this.service = new service_1.Service();
                    this.properties = [];
                    this.usingBundles = [];
                }
                ServiceComponent.prototype.onSelect = function (bundleId) {
                    this.router.navigate(['/bundles', bundleId]);
                };
                ServiceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this._backend.getService(id)
                            .subscribe(function (res) {
                            _this._appGlobals.setIsLoading(true);
                            _this.service = res;
                            var props = res.properties;
                            for (var key in props) {
                                _this.properties.push(new keyValue_1.KeyValue(key, props[key]));
                            }
                            ;
                            _this.usingBundles = res.usingBundles;
                            _this._appGlobals.setIsLoading(false);
                        });
                    });
                };
                ServiceComponent = __decorate([
                    core_1.Component({
                        selector: 'service',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, tabs_1.Tabs, tab_1.Tab],
                        pipes: [derp_pipe_1.DerpPipe],
                        providers: [backend_service_1.BackendServices, http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/html/services/service.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, backend_service_1.BackendServices, appglobals_service_1.AppGlobals])
                ], ServiceComponent);
                return ServiceComponent;
            }());
            exports_1("ServiceComponent", ServiceComponent);
        }
    }
});

//# sourceMappingURL=service.component.js.map
