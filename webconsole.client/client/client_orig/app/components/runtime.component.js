System.register(['@angular/core', '@angular/common', "@angular/router", '../services/backend.service', '../services/appglobals.service', '../domain/runtimeconfig', '../pipes/packagesFilter.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, backend_service_1, appglobals_service_1, runtimeconfig_1, packagesFilter_pipe_1;
    var RuntimeComponent;
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
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            },
            function (runtimeconfig_1_1) {
                runtimeconfig_1 = runtimeconfig_1_1;
            },
            function (packagesFilter_pipe_1_1) {
                packagesFilter_pipe_1 = packagesFilter_pipe_1_1;
            }],
        execute: function() {
            RuntimeComponent = (function () {
                function RuntimeComponent(router, _backend, _appGlobals) {
                    this.router = router;
                    this._backend = _backend;
                    this._appGlobals = _appGlobals;
                    this.runtimeConfig = new runtimeconfig_1.RuntimeConfig();
                }
                RuntimeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._appGlobals.setIsLoading(true);
                    this._backend.getRuntimeConfig()
                        .subscribe(function (res) {
                        _this.runtimeConfig = res;
                        console.log(res.systemProperties);
                        _this._appGlobals.setIsLoading(false);
                    });
                };
                RuntimeComponent = __decorate([
                    core_1.Component({
                        selector: 'packages',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [backend_service_1.BackendServices],
                        pipes: [packagesFilter_pipe_1.PackagesFilter],
                        templateUrl: 'app/html/runtime.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices, appglobals_service_1.AppGlobals])
                ], RuntimeComponent);
                return RuntimeComponent;
            }());
            exports_1("RuntimeComponent", RuntimeComponent);
        }
    }
});

//# sourceMappingURL=runtime.component.js.map
