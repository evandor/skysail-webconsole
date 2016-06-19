System.register(['angular2/core', '../services/backend.service'], function(exports_1, context_1) {
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
    var core_1, backend_service_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent(_backend, _window) {
                    this._backend = _backend;
                    this._window = _window;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                FooterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var port = this._window.location.port;
                    if (port == "2002") {
                        this._backend.getVersion()
                            .subscribe(function (res) { return _this.version = res; });
                    }
                    else {
                        this.version = "latest";
                    }
                };
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        providers: [backend_service_1.BackendServices],
                        template: '<p><small>client: {{version}}</small></p>'
                    }), 
                    __metadata('design:paramtypes', [backend_service_1.BackendServices, Window])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map