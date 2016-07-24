System.register(['@angular/core', 'rxjs/BehaviorSubject', '../services/config.service'], function(exports_1, context_1) {
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
    var core_1, BehaviorSubject_1, config_service_1;
    var AppGlobals;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            }],
        execute: function() {
            AppGlobals = (function () {
                function AppGlobals(_configService) {
                    this._configService = _configService;
                    this._isLoading = new BehaviorSubject_1.BehaviorSubject(false);
                    this._filteredCount = new BehaviorSubject_1.BehaviorSubject(0);
                    this._bundleIdList = new BehaviorSubject_1.BehaviorSubject([]);
                    this._backendUrl = new BehaviorSubject_1.BehaviorSubject("http://localhost:2002/");
                    this._routeParams = new BehaviorSubject_1.BehaviorSubject([]);
                    console.log("AppGlobals constructor");
                    this._backendUrl.next("http://" + location.hostname + ":2002/");
                }
                AppGlobals.prototype.setIsLoading = function (isLoading) {
                    this._isLoading.next(isLoading);
                };
                AppGlobals.prototype.setFilteredCount = function (count) {
                    this._filteredCount.next(count);
                };
                AppGlobals.prototype.setBackendUrl = function (url) {
                    this._backendUrl.next(url);
                };
                AppGlobals.prototype.setBundleIdList = function (theList) {
                    console.log(theList);
                    this._bundleIdList.next(theList);
                };
                AppGlobals.prototype.setRouteParams = function (params) {
                    this._routeParams.next(params);
                };
                AppGlobals = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [config_service_1.ConfigService])
                ], AppGlobals);
                return AppGlobals;
            }());
            exports_1("AppGlobals", AppGlobals);
        }
    }
});

//# sourceMappingURL=appglobals.service.js.map
