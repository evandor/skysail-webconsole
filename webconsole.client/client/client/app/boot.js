System.register(['@angular/platform-browser-dynamic', './app.component', '@angular/router', '@angular/http', './services/cookies.service', './services/auth.service', './services/window.service', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, router_1, http_1, cookies_service_1, auth_service_1, window_service_1, core_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (cookies_service_1_1) {
                cookies_service_1 = cookies_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import 'jquery';
            //import 'semantic';
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [cookies_service_1.CookieService, auth_service_1.AuthService, window_service_1.WindowService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(Window, { useValue: window })]);
        }
    }
});

//# sourceMappingURL=boot.js.map
