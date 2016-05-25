System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', '../services/backend.service', '../components/tabs', '../components/tab'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, backend_service_1, tabs_1, tab_1;
    var BundleComponent;
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
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            }],
        execute: function() {
            BundleComponent = (function () {
                function BundleComponent(_routeParams, _backend) {
                    this._routeParams = _routeParams;
                    this._backend = _backend;
                    this.bundle = {};
                    this.isLoading = true;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                BundleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("oninit bundlesservice called!");
                    var id = this._routeParams.get('id');
                    this._backend.getBundle(id)
                        .subscribe(function (res) {
                        _this.bundle = res;
                        _this.isLoading = false;
                        console.log(res);
                    });
                };
                BundleComponent = __decorate([
                    core_1.Component({
                        selector: 'bundle',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, tabs_1.Tabs, tab_1.Tab],
                        providers: [backend_service_1.BackendServices, http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/html/bundle.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, backend_service_1.BackendServices])
                ], BundleComponent);
                return BundleComponent;
            }());
            exports_1("BundleComponent", BundleComponent);
        }
    }
});
//# sourceMappingURL=bundle.component.js.map