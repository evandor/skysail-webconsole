System.register(['angular2/core', 'angular2/http', 'rxjs/add/observable/forkJoin', '../services/courses.service', '../services/backend.service', './navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, http_1, courses_service_1, backend_service_1, navbar_component_1;
    var CoursesComponent;
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
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(_backend) {
                    this._backend = _backend;
                    this.isLoading = true;
                    this.courses = [];
                    console.log("constructor called");
                    // _backend.setBaseUrl('http://jsonplaceholder.typicode.com/');
                    //_backend.setBaseUrl('http://localhost:2018/demoapp/v1/');
                    _backend.setBaseUrl('http://85.25.22.126:8391/demoapp/v1/');
                }
                CoursesComponent.prototype.onInit = function () {
                };
                CoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var headers = new http_1.Headers({
                        "access-control-request-method": "POST",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa('username' + ':' + 'password')
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    console.log("oninit called");
                    this._backend.get('Timetables/16:0/?media=json', options)
                        .subscribe(function (res) { return _this.courses = res; });
                    //.subscribe(res => console.log(res));
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/html/courses.template.html',
                        directives: [navbar_component_1.Navbar],
                        providers: [http_1.HTTP_PROVIDERS, courses_service_1.CoursesService, backend_service_1.BackendServices, navbar_component_1.Navbar]
                    }), 
                    __metadata('design:paramtypes', [backend_service_1.BackendServices])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map