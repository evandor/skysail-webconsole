System.register(['angular2/core', 'angular2/router', './components/courses.component', './components/spotify.component', './components/footer.component', './components/bundles.component', './components/navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, courses_component_1, spotify_component_1, footer_component_1, bundles_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (spotify_component_1_1) {
                spotify_component_1 = spotify_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (bundles_component_1_1) {
                bundles_component_1 = bundles_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/courses', as: 'Courses', component: courses_component_1.CoursesComponent },
                        { path: '/', as: 'Spotify', component: spotify_component_1.SpotifyComponent },
                        { path: '/bundles', as: 'Bundles', component: bundles_component_1.BundlesComponent },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/html/app.template.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink, footer_component_1.FooterComponent, navbar_component_1.Navbar]
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