System.register(['@angular/core', '@angular/common', "@angular/router", '@angular/http', '../../services/backend.service', '../../services/appglobals.service', '../../domain/bundle', '../../components/tabs', '../../components/tab'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, backend_service_1, appglobals_service_1, bundle_1, tabs_1, tab_1;
    var BundleContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            },
            function (bundle_1_1) {
                bundle_1 = bundle_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            }],
        execute: function() {
            BundleContentComponent = (function () {
                function BundleContentComponent(_backend, _route, _router, _appGlobals) {
                    this._backend = _backend;
                    this._route = _route;
                    this._router = _router;
                    this._appGlobals = _appGlobals;
                    this.bundle = new bundle_1.Bundle();
                }
                BundleContentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this._backend.getBundleContents(id)
                            .subscribe(function (res) {
                            _this._appGlobals.setIsLoading(true);
                            _this.bundle = res;
                            _this._appGlobals.setIsLoading(false);
                        });
                    });
                };
                BundleContentComponent.prototype.showFileContents = function (bundleId, path) {
                    var base = '/bundles/' + bundleId + '/contents/';
                    this._router.navigate([base, window.btoa(path)]);
                };
                BundleContentComponent = __decorate([
                    core_1.Component({
                        selector: 'bundle',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, tabs_1.Tabs, tab_1.Tab],
                        providers: [backend_service_1.BackendServices, http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/html/bundles/bundlecontent.template.html',
                    }), 
                    __metadata('design:paramtypes', [backend_service_1.BackendServices, router_1.ActivatedRoute, router_1.Router, appglobals_service_1.AppGlobals])
                ], BundleContentComponent);
                return BundleContentComponent;
            }());
            exports_1("BundleContentComponent", BundleContentComponent);
        }
    }
});

//# sourceMappingURL=bundlecontent.component.js.map
