System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var BundleStatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BundleStatePipe = (function () {
                function BundleStatePipe() {
                }
                BundleStatePipe.prototype.transform = function (bundleState) {
                    if (bundleState == null) {
                        return "<span>***</span>";
                    }
                    return "<span class='" + this.getStateClass(bundleState) + "'>" + bundleState + "</span>";
                };
                BundleStatePipe.prototype.getStateClass = function (state) {
                    switch (state) {
                        case "ACTIVE":
                            return "label label-success";
                        case "INSTALLED":
                            return "label label-warning";
                        default:
                            return "label label-danger";
                    }
                };
                BundleStatePipe = __decorate([
                    core_1.Pipe({
                        name: 'bundleState'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BundleStatePipe);
                return BundleStatePipe;
            }());
            exports_1("BundleStatePipe", BundleStatePipe);
        }
    }
});

//# sourceMappingURL=bundleState.pipe.js.map
