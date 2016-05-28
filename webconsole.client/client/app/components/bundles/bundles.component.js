System.register(['angular2/core', 'angular2/common', "angular2/router", '../../services/backend.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, backend_service_1;
    var BundlesComponent;
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
            }],
        execute: function() {
            BundlesComponent = (function () {
                function BundlesComponent(router, _backend) {
                    this.router = router;
                    this._backend = _backend;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                BundlesComponent.prototype.onSelect = function (bundle) {
                    this.router.navigate(['Bundle', { id: bundle.id }]);
                };
                BundlesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("oninit bundlesservice called!");
                    this._backend.getBundles()
                        .subscribe(function (res) { return _this.bundles = res; });
                };
                BundlesComponent = __decorate([
                    core_1.Component({
                        selector: 'bundles',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [backend_service_1.BackendServices],
                        templateUrl: 'app/html/bundles/bundles.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices])
                ], BundlesComponent);
                return BundlesComponent;
            }());
            exports_1("BundlesComponent", BundlesComponent);
        }
    }
});
//# sourceMappingURL=bundles.component.js.map