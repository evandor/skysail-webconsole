System.register(['@angular/core', '../domain/service', '../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, service_1, appglobals_service_1;
    var ServicesFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            ServicesFilter = (function () {
                function ServicesFilter(_appGlobals) {
                    this._appGlobals = _appGlobals;
                }
                ServicesFilter.prototype.transform = function (services, args) {
                    if (services == null) {
                        //this._appGlobals.setFilteredCount(0);
                        return service_1.Service[0];
                    }
                    if (typeof args[0] == 'undefined') {
                        //this._appGlobals.setFilteredCount(services.length);
                        return services.filter(function (bundle) { return true; });
                    }
                    var filteredServices = services.filter(function (service) { return service.objectClass.indexOf(args.toString()) !== -1; });
                    // this._appGlobals.setFilteredCount(filteredBundles.length);
                    var theList = [];
                    filteredServices.forEach(function (bundle) {
                        theList.push(bundle.id);
                    });
                    //this._appGlobals.setBundleIdList(theList);
                    return filteredServices;
                };
                ServicesFilter = __decorate([
                    core_1.Pipe({
                        name: 'servicesFilter'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [appglobals_service_1.AppGlobals])
                ], ServicesFilter);
                return ServicesFilter;
            }());
            exports_1("ServicesFilter", ServicesFilter);
        }
    }
});

//# sourceMappingURL=servicesFilter.pipe.js.map
