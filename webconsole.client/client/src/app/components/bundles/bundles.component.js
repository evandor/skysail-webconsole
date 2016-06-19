System.register(['angular2/core', 'angular2/common', "angular2/router", '../../services/backend.service', '../../services/breadcrumbs.service', '../../components/navbar/breadcrumb', '../../components/tabs', '../../components/tab', '../../pipes/bundleState.pipe', '../../pipes/bundlesFilter.pipe', '../../directives/percentBar.d3.directive', '../../directives/adjacency.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, backend_service_1, breadcrumbs_service_1, breadcrumb_1, tabs_1, tab_1, bundleState_pipe_1, bundlesFilter_pipe_1, percentBar_d3_directive_1, adjacency_directive_1;
    var BundlesComponent;
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
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
            },
            function (breadcrumb_1_1) {
                breadcrumb_1 = breadcrumb_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (bundleState_pipe_1_1) {
                bundleState_pipe_1 = bundleState_pipe_1_1;
            },
            function (bundlesFilter_pipe_1_1) {
                bundlesFilter_pipe_1 = bundlesFilter_pipe_1_1;
            },
            function (percentBar_d3_directive_1_1) {
                percentBar_d3_directive_1 = percentBar_d3_directive_1_1;
            },
            function (adjacency_directive_1_1) {
                adjacency_directive_1 = adjacency_directive_1_1;
            }],
        execute: function() {
            BundlesComponent = (function () {
                function BundlesComponent(router, _backend, _breadcrumbService) {
                    this.router = router;
                    this._backend = _backend;
                    this._breadcrumbService = _breadcrumbService;
                    this.searchId = "";
                    this.maxSize = 0;
                    _backend.setBaseUrl('http://localhost:2002/');
                }
                BundlesComponent.prototype.onSelect = function (bundle) {
                    this.router.navigate(['Bundle', { id: bundle.id }]);
                    this._breadcrumbService.add(new breadcrumb_1.Breadcrumb(['Bundle'], "hier"));
                };
                BundlesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._backend.getBundles()
                        .subscribe(function (res) {
                        _this.bundles = res;
                        (function (err) { return _this.logError(err); });
                        _this.bundles.forEach(function (bundle) {
                            if (bundle.size > _this.maxSize) {
                                _this.maxSize = bundle.size;
                            }
                        });
                    });
                };
                BundlesComponent.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                BundlesComponent.prototype.getPercentChartSpanId = function (id) {
                    return "chartSpanId_" + id;
                };
                BundlesComponent.prototype.setData = function (value, max, size) {
                    this.value = value;
                    this.max = max;
                    this.size = size;
                };
                BundlesComponent = __decorate([
                    core_1.Component({
                        selector: 'bundles',
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgFor, common_1.NgFormModel, percentBar_d3_directive_1.PercentBarDirective, tabs_1.Tabs, tab_1.Tab, adjacency_directive_1.AdjacencyDirective],
                        providers: [backend_service_1.BackendServices, breadcrumbs_service_1.BreadcrumbsService],
                        templateUrl: 'app/html/bundles/bundles.template.html',
                        pipes: [bundlesFilter_pipe_1.BundlesFilter, bundleState_pipe_1.BundleStatePipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendServices, breadcrumbs_service_1.BreadcrumbsService])
                ], BundlesComponent);
                return BundlesComponent;
            }());
            exports_1("BundlesComponent", BundlesComponent);
        }
    }
});
//# sourceMappingURL=bundles.component.js.map