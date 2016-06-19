System.register(['angular2/core', 'angular2/common', "angular2/router", '../services/backend.service', '../pipes/maxLength.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, backend_service_1, maxLength_pipe_1;
    var LogsComponent;
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
            function (maxLength_pipe_1_1) {
                maxLength_pipe_1 = maxLength_pipe_1_1;
            }],
        execute: function() {
            LogsComponent = (function () {
                function LogsComponent(router, _backend) {
                    this.router = router;
                    this._backend = _backend;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                LogsComponent.prototype.onSelectService = function (service) {
                    this.router.navigate(['Service', { id: service.id }]);
                };
                LogsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("oninit bundlesservice called!");
                    this._backend.getLogs()
                        .subscribe(function (res) { return _this.logs = res; });
                };
                LogsComponent = __decorate([
                    core_1.Component({
                        selector: 'logs',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [backend_service_1.BackendServices],
                        pipes: [maxLength_pipe_1.MaxLengthPipe],
                        templateUrl: 'app/html/logs.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices])
                ], LogsComponent);
                return LogsComponent;
            }());
            exports_1("LogsComponent", LogsComponent);
        }
    }
});
//# sourceMappingURL=logs.component.js.map