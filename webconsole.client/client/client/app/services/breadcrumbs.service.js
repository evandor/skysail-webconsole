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
    var BreadcrumbsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BreadcrumbsService = (function () {
                function BreadcrumbsService() {
                    console.log("in breadcrumbsservice constructor");
                    this.breadcrumbs = [];
                    //this.breadcrumbs.push(new Breadcrumb(['bundles'], '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>'));
                }
                BreadcrumbsService.prototype.getBreadcrumbs = function () {
                    return this.breadcrumbs;
                };
                BreadcrumbsService.prototype.clear = function () {
                    this.breadcrumbs = [];
                };
                BreadcrumbsService.prototype.add = function (breadcrumb) {
                    this.breadcrumbs.push(breadcrumb);
                };
                BreadcrumbsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BreadcrumbsService);
                return BreadcrumbsService;
            }());
            exports_1("BreadcrumbsService", BreadcrumbsService);
        }
    }
});

//# sourceMappingURL=breadcrumbs.service.js.map
