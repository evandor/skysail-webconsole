System.register(['@angular/core', '../domain/backendconfig'], function(exports_1, context_1) {
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
    var core_1, backendconfig_1;
    var ConfigComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (backendconfig_1_1) {
                backendconfig_1 = backendconfig_1_1;
            }],
        execute: function() {
            ConfigComponent = (function () {
                function ConfigComponent() {
                    this.model = new backendconfig_1.BackendConfig('evandor', 'none', 'http://localhost:8080');
                    this.submitted = false;
                    // Reset the form with a new hero AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                ConfigComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(ConfigComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                ConfigComponent.prototype.showFormControls = function (form) {
                    return form && form.controls['endpoint'] && form.controls['endpoint'].value;
                };
                ConfigComponent = __decorate([
                    core_1.Component({
                        selector: 'config',
                        templateUrl: 'app/html/config.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfigComponent);
                return ConfigComponent;
            }());
            exports_1("ConfigComponent", ConfigComponent);
        }
    }
});

//# sourceMappingURL=config.component.js.map
