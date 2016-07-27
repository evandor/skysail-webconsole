System.register(['@angular/core', '../domain/bundle', '../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, bundle_1, appglobals_service_1;
    var BundlesFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bundle_1_1) {
                bundle_1 = bundle_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            BundlesFilter = (function () {
                function BundlesFilter(_appGlobals) {
                    this._appGlobals = _appGlobals;
                }
                BundlesFilter.prototype.transform = function (bundles, args) {
                    if (bundles == null) {
                        this._appGlobals.setFilteredCount(0);
                        return bundle_1.Bundle[0];
                    }
                    if (typeof args[0] == 'undefined') {
                        this._appGlobals.setFilteredCount(bundles.length);
                        return bundles.filter(function (bundle) { return true; });
                    }
                    var filteredBundles = bundles.filter(function (bundle) { return bundle.symbolicName.indexOf(args.toString()) !== -1; });
                    this._appGlobals.setFilteredCount(filteredBundles.length);
                    var theList = [];
                    filteredBundles.forEach(function (bundle) {
                        theList.push(bundle.id);
                    });
                    this._appGlobals.setBundleIdList(theList);
                    return filteredBundles;
                };
                BundlesFilter = __decorate([
                    core_1.Pipe({
                        name: 'bundlesFilter'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [appglobals_service_1.AppGlobals])
                ], BundlesFilter);
                return BundlesFilter;
            }());
            exports_1("BundlesFilter", BundlesFilter);
        }
    }
});

//# sourceMappingURL=bundlesFilter.pipe.1.js.map
