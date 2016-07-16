System.register(['@angular/core', '@angular/common', "@angular/router", '@angular/http', '../../services/backend.service', '../../services/appglobals.service', '../../services/breadcrumbs.service', '../../domain/bundle', '../../components/tabs', '../../components/tab', '../../pipes/newline.pipe', '../../pipes/values.pipe', '../../pipes/keyvalues.pipe', '../../pipes/link.pipe', '../../pipes/bundleState.pipe', '../../pipes/maxLength.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, backend_service_1, appglobals_service_1, breadcrumbs_service_1, bundle_1, tabs_1, tab_1, newline_pipe_1, values_pipe_1, keyvalues_pipe_1, link_pipe_1, bundleState_pipe_1, maxLength_pipe_1;
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
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
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
            function (newline_pipe_1_1) {
                newline_pipe_1 = newline_pipe_1_1;
            },
            function (values_pipe_1_1) {
                values_pipe_1 = values_pipe_1_1;
            },
            function (keyvalues_pipe_1_1) {
                keyvalues_pipe_1 = keyvalues_pipe_1_1;
            },
            function (link_pipe_1_1) {
                link_pipe_1 = link_pipe_1_1;
            },
            function (bundleState_pipe_1_1) {
                bundleState_pipe_1 = bundleState_pipe_1_1;
            },
            function (maxLength_pipe_1_1) {
                maxLength_pipe_1 = maxLength_pipe_1_1;
            }],
        execute: function() {
            BundleComponent = (function () {
                function BundleComponent(_backend, _route, _router, _breadcrumbsService, _appGlobals) {
                    this._backend = _backend;
                    this._route = _route;
                    this._router = _router;
                    this._breadcrumbsService = _breadcrumbsService;
                    this._appGlobals = _appGlobals;
                    this.bundle = new bundle_1.Bundle();
                    this.capabilities = [];
                    this.wires = []; //new Map<string, Capability[]>();
                }
                BundleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        _this._appGlobals.setRouteParams(params);
                        var id = params['id'];
                        _this.wires = [];
                        _this._backend.getBundle(id)
                            .subscribe(function (res) {
                            _this._appGlobals.setIsLoading(true);
                            _this.bundle = res;
                            var props = res.wireDescriptor.capabilities;
                            var providedWires = res.wireDescriptor.providedWires;
                            var oldIdentifier = "";
                            var theValue = [];
                            providedWires.forEach(function (wire) {
                                var identifier = wire.capability['id'];
                                if (oldIdentifier != identifier) {
                                    oldIdentifier = identifier;
                                    _this.wires[identifier] = Array();
                                }
                                //theValue.push(wire);
                                _this.wires[identifier].push(wire);
                            });
                            console.log(_this.wires);
                            _this._backend.getBundleServices(_this.bundle.id)
                                .subscribe(function (serviceRes) {
                                _this.bundle.providedServices = serviceRes;
                            });
                            _this._appGlobals.setIsLoading(false);
                        });
                    });
                };
                BundleComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                BundleComponent.prototype.exportedPackagesTitle = function () {
                    return "Exp. Pkgs. (" + this.bundle.exportPackage.length + ")";
                };
                BundleComponent.prototype.importedPackagesTitle = function () {
                    //                return "<span class='glyphicon glyphicon-log-in' aria-hidden='true' style='color: blue'> Imported Packages (" + this.bundle.importPackage.length + ")";
                    return "Imp. Pkgs. (" + this.bundle.importPackage.length + ")";
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
                    this._router.navigate(['/services', service.id]);
                };
                BundleComponent.prototype.onSelectBundle = function (id) {
                    this._router.navigate(['/bundles', id]);
                };
                BundleComponent.prototype.showContents = function (bundle) {
                    this._router.navigate(['/bundles', bundle.id, 'contents']);
                };
                BundleComponent.prototype.onSubmit = function () {
                    console.log("submitted");
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
                        pipes: [newline_pipe_1.NewlinePipe, maxLength_pipe_1.MaxLengthPipe, values_pipe_1.ValuesPipe, keyvalues_pipe_1.KeyValuesPipe, bundleState_pipe_1.BundleStatePipe, link_pipe_1.LinkPipe],
                        templateUrl: 'app/html/bundles/bundle.template.html',
                    }), 
                    __metadata('design:paramtypes', [backend_service_1.BackendServices, router_1.ActivatedRoute, router_1.Router, breadcrumbs_service_1.BreadcrumbsService, appglobals_service_1.AppGlobals])
                ], BundleComponent);
                return BundleComponent;
            }());
            exports_1("BundleComponent", BundleComponent);
        }
    }
});

//# sourceMappingURL=bundle.component.js.map
