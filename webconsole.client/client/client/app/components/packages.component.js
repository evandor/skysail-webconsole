System.register(['@angular/core', '@angular/common', "@angular/router", '../services/backend.service', '../services/breadcrumbs.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, backend_service_1, breadcrumbs_service_1;
    var PackagesComponent;
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
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
            }],
        execute: function() {
            PackagesComponent = (function () {
                function PackagesComponent(router, _backend, _breadcrumbService) {
                    this.router = router;
                    this._backend = _backend;
                    this._breadcrumbService = _breadcrumbService;
                    this.searchId = "";
                    this.isLoading = true;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                PackagesComponent.prototype.onSelectBundle = function (bundle) {
                    this.router.navigate(['Bundle', { id: bundle.id }]);
                };
                PackagesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._backend.getPackages()
                        .subscribe(function (res) {
                        _this.packages = res;
                        _this.isLoading = false;
                    });
                };
                PackagesComponent = __decorate([
                    core_1.Component({
                        selector: 'packages',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [backend_service_1.BackendServices, breadcrumbs_service_1.BreadcrumbsService],
                        templateUrl: 'app/html/packages.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices, breadcrumbs_service_1.BreadcrumbsService])
                ], PackagesComponent);
                return PackagesComponent;
            }());
            exports_1("PackagesComponent", PackagesComponent);
        }
    }
});

//# sourceMappingURL=packages.component.js.map
