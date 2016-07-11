System.register(["@angular/core", '@angular/router', '../../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, router_1, appglobals_service_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent(_route, _appGlobals, _router) {
                    var _this = this;
                    this._route = _route;
                    this._appGlobals = _appGlobals;
                    this._router = _router;
                    this.bundleIdList = [];
                    this.currentId = "0";
                    this.prevExistsFlag = false;
                    this._appGlobals._bundleIdList.subscribe(function (val) { return _this.bundleIdList = val; });
                    this._appGlobals._routeParams.subscribe(function (val) { return _this.routeParams = val; });
                }
                NavigationComponent.prototype.ngOnInit = function () {
                    console.log("ID" + this.routeParams['id']);
                    if (this.routeParams['id'] === "undefined") {
                        return false;
                    }
                    var currentBundleIndex = this.getCurrentBundleIndex();
                    console.log(currentBundleIndex);
                    if (currentBundleIndex == null || currentBundleIndex == 0) {
                        return false;
                    }
                    return true;
                };
                NavigationComponent.prototype.prevExists = function () {
                    return this.prevExistsFlag;
                };
                NavigationComponent.prototype.next = function () {
                    var _this = this;
                    var goto = "0";
                    var index = 0;
                    this.bundleIdList.forEach(function (id) {
                        index += 1;
                        if (id == _this.routeParams['id']) {
                            goto = _this.bundleIdList[index];
                        }
                    });
                    this._router.navigate(['/bundles', goto]);
                };
                NavigationComponent.prototype.prev = function () {
                    var _this = this;
                    var goto = "0";
                    var index = 0;
                    this.bundleIdList.forEach(function (id) {
                        index += 1;
                        if (id == _this.routeParams['id']) {
                            goto = _this.bundleIdList[index - 2];
                        }
                    });
                    this._router.navigate(['/bundles', goto]);
                };
                NavigationComponent.prototype.getCurrentBundleIndex = function () {
                    var _this = this;
                    var index = 0;
                    this.bundleIdList.forEach(function (id) {
                        index += 1;
                        if (id == _this.routeParams['id']) {
                            return index;
                        }
                    });
                    return null;
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation',
                        templateUrl: 'app/html/navbar/navigation.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, appglobals_service_1.AppGlobals, router_1.Router])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});

//# sourceMappingURL=navigation.component.js.map
