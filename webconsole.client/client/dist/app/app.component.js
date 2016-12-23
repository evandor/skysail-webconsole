System.register(['@angular/core', '@angular/router', './components/navbar/navbar.component', './components/navbar/breadcrumbs.component', './components/navbar/navigation.component', './components/footer.component', './directives/percentBar.d3.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, breadcrumbs_component_1, navigation_component_1, footer_component_1, percentBar_d3_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (breadcrumbs_component_1_1) {
                breadcrumbs_component_1 = breadcrumbs_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (percentBar_d3_directive_1_1) {
                percentBar_d3_directive_1 = percentBar_d3_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Ringo";
                    this.names = ["John", "Paul", "George", "Ringo"];
                    this.graphData = [10, 20, 30, 40, 60];
                    this.data = [4, 8, 15, 16, 23, 42];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/html/app.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.FooterComponent, navbar_component_1.Navbar, navigation_component_1.NavigationComponent, breadcrumbs_component_1.Breadcrumbs, percentBar_d3_directive_1.PercentBarDirective] //, RouterOutletMap, BarGraph, TimerWebsocketComponent, SMDropdown, D3Directive]
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
