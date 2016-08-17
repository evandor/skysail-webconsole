/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>
System.register(["./app.component", "@angular/platform-browser-dynamic", "@angular/core", '@angular/http', './services/window.service', './services/config.service', './services/appglobals.service', './services/breadcrumbs.service', './app.router', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, platform_browser_dynamic_1, core_1, http_1, window_service_1, config_service_1, appglobals_service_1, breadcrumbs_service_1, app_router_1, forms_1;
    var appPromise;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            },
            function (breadcrumbs_service_1_1) {
                breadcrumbs_service_1 = breadcrumbs_service_1_1;
            },
            function (app_router_1_1) {
                app_router_1 = app_router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                window_service_1.WindowService,
                config_service_1.ConfigService,
                app_router_1.APP_ROUTER_PROVIDERS,
                //LocalStorageService,
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms(),
                appglobals_service_1.AppGlobals,
                breadcrumbs_service_1.BreadcrumbsService,
                //provide(LocationStrategy, {useClass: HashLocationStrategy}
                core_1.provide(Window, { useValue: window })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//bootstrap(AppComponent,[CookieService, AuthService, WindowService, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(Window, {useValue: window})]);
//LocalStorageSubscriber(appPromise); 

//# sourceMappingURL=boot.js.map
