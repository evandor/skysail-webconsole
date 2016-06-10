System.register(['angular2/core', 'angular2/common', "angular2/router", 'angular2/http', '../../services/backend.service', '../../domain/bundle', '../../components/tabs', '../../components/tab', '../../domain/keyValue', '../../pipes/newline.pipe', '../../pipes/values.pipe', '../../pipes/bundleState.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, backend_service_1, bundle_1, tabs_1, tab_1, keyValue_1, newline_pipe_1, values_pipe_1, bundleState_pipe_1;
    var BundleComponent;
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
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (bundle_1_1) {
                bundle_1 = bundle_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (keyValue_1_1) {
                keyValue_1 = keyValue_1_1;
            },
            function (newline_pipe_1_1) {
                newline_pipe_1 = newline_pipe_1_1;
            },
            function (values_pipe_1_1) {
                values_pipe_1 = values_pipe_1_1;
            },
            function (bundleState_pipe_1_1) {
                bundleState_pipe_1 = bundleState_pipe_1_1;
            }],
        execute: function() {
            BundleComponent = (function () {
                function BundleComponent(_routeParams, _backend, _router) {
                    this._routeParams = _routeParams;
                    this._backend = _backend;
                    this._router = _router;
                    this.bundle = new bundle_1.Bundle();
                    this.capabilities = [];
                    this.isLoading = true;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                BundleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("oninit bundlesservice called!");
                    var id = this._routeParams.get('id');
                    this._backend.getBundle(id)
                        .subscribe(function (res) {
                        _this.bundle = res;
                        var props = res.wireDescriptor.capabilities;
                        for (var key in props) {
                            if (key == "attributes") {
                                var attributes = props[key];
                                var attributeMap;
                                for (var attribute in attributes) {
                                    attributeMap.push(new keyValue_1.KeyValue(attribute, attributes[attribute]));
                                }
                                _this.capabilities.push(new keyValue_1.KeyValue(key, attributeMap));
                            }
                            else {
                                _this.capabilities.push(new keyValue_1.KeyValue(key, props[key]));
                            }
                        }
                        ;
                        _this._backend.getBundleServices(_this.bundle.id)
                            .subscribe(function (serviceRes) {
                            _this.bundle.providedServices = serviceRes;
                        });
                        _this.isLoading = false;
                    });
                };
                BundleComponent.prototype.exportedPackagesTitle = function () {
                    return "Exported Packages (" + this.bundle.exportPackage.length + ")";
                };
                BundleComponent.prototype.importedPackagesTitle = function () {
                    //                return "<span class='glyphicon glyphicon-log-in' aria-hidden='true' style='color: blue'> Imported Packages (" + this.bundle.importPackage.length + ")";
                    return "Imported Packages (" + this.bundle.importPackage.length + ")";
                };
                BundleComponent.prototype.providedServicesTitle = function () {
                    var providedServicesCount = 0;
                    if (this.bundle.providedServices != null) {
                        providedServicesCount = this.bundle.providedServices.length;
                    }
                    return "Provided Services (" + providedServicesCount + ")";
                };
                BundleComponent.prototype.getImportPackageClass = function (pkg) {
                    if (pkg.packageResolvingCandidates && pkg.packageResolvingCandidates.length == 0 && pkg.resolution == "MANDATORY") {
                        return "problem";
                    }
                    return "";
                };
                BundleComponent.prototype.onSelectService = function (service) {
                    this._router.navigate(['Service', { id: service.id }]);
                    //this._breadcrumbService.add(new Breadcrumb(['Bundle'], "hier"));
                };
                BundleComponent.prototype.objToStrMap = function (obj) {
                    var strMap = new Map();
                    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                        var k = _a[_i];
                        strMap.set(k, obj[k]);
                    }
                    return strMap;
                };
                BundleComponent = __decorate([
                    core_1.Component({
                        selector: 'bundle',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, tabs_1.Tabs, tab_1.Tab],
                        providers: [backend_service_1.BackendServices, http_1.HTTP_PROVIDERS],
                        pipes: [newline_pipe_1.NewlinePipe, values_pipe_1.ValuesPipe, bundleState_pipe_1.BundleStatePipe],
                        templateUrl: 'app/html/bundles/bundle.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, backend_service_1.BackendServices, router_1.Router])
                ], BundleComponent);
                return BundleComponent;
            }());
            exports_1("BundleComponent", BundleComponent);
        }
    }
});
//# sourceMappingURL=bundle.component.js.map