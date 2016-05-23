System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var BackendServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            BackendServices = (function () {
                function BackendServices(_http) {
                    this._http = _http;
                    this._baseUrl = '';
                }
                BackendServices.prototype.setBaseUrl = function (baseUrl) {
                    this._baseUrl = baseUrl;
                };
                BackendServices.prototype.get = function (path) {
                    /*var headers = new Headers({
                        "access-control-request-method": "POST"
                    });
            
                    var options = new RequestOptions({
                        headers: headers
                    });*/
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'Basic YWRtaW46c2t5c2FpbA==');
                    return this._http.get(this._baseUrl + path, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BackendServices);
                return BackendServices;
            }());
            exports_1("BackendServices", BackendServices);
        }
    }
});
//# sourceMappingURL=backend.service.js.map