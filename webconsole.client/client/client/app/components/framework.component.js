System.register(['@angular/core', '@angular/common', '@angular/router', '@angular/http', '../services/backend.service', '../components/tabs', '../components/tab'], function(exports_1, context_1) {
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
    var FrameworkComponent;
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
            FrameworkComponent = (function () {
                function FrameworkComponent(_routeParams, _backend) {
                    this._routeParams = _routeParams;
                    this._backend = _backend;
                    this.framework = {};
                    this.isLoading = true;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                FrameworkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._backend.getFramework()
                        .subscribe(function (res) {
                        _this.framework = res;
                        _this.isLoading = false;
                        console.log("Framework: " + _this.framework);
                        //this.bundle.setManifestHeaders(this.objToStrMap(res.manifestHeaders));
                    });
                };
                FrameworkComponent = __decorate([
                    core_1.Component({
                        selector: 'bundle',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, tabs_1.Tabs, tab_1.Tab],
                        providers: [backend_service_1.BackendServices, http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/html/bundles/bundle.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteSegment, backend_service_1.BackendServices])
                ], FrameworkComponent);
                return FrameworkComponent;
            }());
            exports_1("FrameworkComponent", FrameworkComponent);
        }
    }
});

//# sourceMappingURL=framework.component.js.map
