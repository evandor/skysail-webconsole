System.register(['@angular/router', './components/framework.component', './components/bundles/bundles.component', './components/bundles/bundle.component', './components/logs.component', './components/services/services.component', './components/services/service.component', './components/packages.component', './components/help.component', './components/snapshots/snapshots.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, framework_component_1, bundles_component_1, bundle_component_1, logs_component_1, services_component_1, service_component_1, packages_component_1, help_component_1, snapshots_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (framework_component_1_1) {
                framework_component_1 = framework_component_1_1;
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
            function (packages_component_1_1) {
                packages_component_1 = packages_component_1_1;
            },
            function (help_component_1_1) {
                help_component_1 = help_component_1_1;
            },
            function (snapshots_component_1_1) {
                snapshots_component_1 = snapshots_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'framework', component: framework_component_1.FrameworkComponent },
                { path: 'bundles', component: bundles_component_1.BundlesComponent },
                { path: 'bundles/:id', component: bundle_component_1.BundleComponent },
                { path: 'services', component: services_component_1.ServicesComponent },
                { path: 'services/:id', component: service_component_1.ServiceComponent },
                { path: 'packages', component: packages_component_1.PackagesComponent },
                { path: 'logs', component: logs_component_1.LogsComponent },
                { path: 'snapshots', component: snapshots_component_1.SnapshotsComponent },
                { path: 'help', component: help_component_1.HelpComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=app.router.js.map
