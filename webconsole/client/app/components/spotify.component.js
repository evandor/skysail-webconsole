System.register(['angular2/core', 'angular2/http', 'rxjs/add/observable/forkJoin', '../services/courses.service', '../services/cookies.service', '../services/auth.service', '../services/backend.service', '../services/window.service', './navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, http_1, courses_service_1, cookies_service_1, auth_service_1, backend_service_1, window_service_1, navbar_component_1;
    var SpotifyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (cookies_service_1_1) {
                cookies_service_1 = cookies_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            SpotifyComponent = (function () {
                function SpotifyComponent(cookies, authService) {
                    this.cookies = cookies;
                    this.authService = authService;
                    //console.log("Public instantiated");
                }
                Object.defineProperty(SpotifyComponent.prototype, "idCookie", {
                    get: function () {
                        return ""; //this.cookies.getCookie('id');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpotifyComponent.prototype, "authenticated", {
                    get: function () {
                        return this.authService.isAuthenticated();
                    },
                    enumerable: true,
                    configurable: true
                });
                SpotifyComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/html/spotify.template.html',
                        directives: [navbar_component_1.Navbar],
                        providers: [http_1.HTTP_PROVIDERS, courses_service_1.CoursesService, backend_service_1.BackendServices, backend_service_1.BackendServices, cookies_service_1.CookieService, auth_service_1.AuthService, window_service_1.WindowService, navbar_component_1.Navbar]
                    }), 
                    __metadata('design:paramtypes', [cookies_service_1.CookieService, auth_service_1.AuthService])
                ], SpotifyComponent);
                return SpotifyComponent;
            }());
            exports_1("SpotifyComponent", SpotifyComponent);
        }
    }
});
//# sourceMappingURL=spotify.component.js.map