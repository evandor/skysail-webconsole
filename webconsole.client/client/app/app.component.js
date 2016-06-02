System.register(['angular2/core', 'angular2/router', './components/framework.component', './components/footer.component', './components/bundles/bundles.component', './components/bundles/bundle.component', './components/logs.component', './components/services/services.component', './components/services/service.component', './components/help.component', './components/snapshots/snapshots.component', './components/graph.component', './components/navbar/navbar.component', './components/navbar/breadcrumbs.component'], function(exports_1, context_1) {
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
    var core_1, router_1, framework_component_1, footer_component_1, bundles_component_1, bundle_component_1, logs_component_1, services_component_1, service_component_1, help_component_1, snapshots_component_1, graph_component_1, navbar_component_1, breadcrumbs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (framework_component_1_1) {
                framework_component_1 = framework_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (bundles_component_1_1) {
                bundles_component_1 = bundles_component_1_1;
            },
            function (bundle_component_1_1) {
                bundle_component_1 = bundle_component_1_1;
            },
            function (logs_component_1_1) {
                logs_component_1 = logs_component_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (service_component_1_1) {
                service_component_1 = service_component_1_1;
            },
            function (help_component_1_1) {
                help_component_1 = help_component_1_1;
            },
            function (snapshots_component_1_1) {
                snapshots_component_1 = snapshots_component_1_1;
            },
            function (graph_component_1_1) {
                graph_component_1 = graph_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (breadcrumbs_component_1_1) {
                breadcrumbs_component_1 = breadcrumbs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.graphData = [10, 20, 30, 40, 60];
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/framework', as: 'Framework', component: framework_component_1.FrameworkComponent },
                        { path: '/bundles', as: 'Bundles', component: bundles_component_1.BundlesComponent, useAsDefault: true },
                        { path: '/bundles/:id', as: 'Bundle', component: bundle_component_1.BundleComponent },
                        { path: '/services', as: 'Services', component: services_component_1.ServicesComponent },
                        { path: '/services/:id', as: 'Service', component: service_component_1.ServiceComponent },
                        { path: '/logs', as: 'Logs', component: logs_component_1.LogsComponent },
                        // { path: '/graph',        as: 'Graph',     component: GraphComponent },
                        { path: '/snapshots', as: 'Snapshots', component: snapshots_component_1.SnapshotsComponent },
                        { path: '/help', as: 'Help', component: help_component_1.HelpComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/html/app.template.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink, footer_component_1.FooterComponent, navbar_component_1.Navbar, breadcrumbs_component_1.Breadcrumbs, graph_component_1.BarGraph]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map