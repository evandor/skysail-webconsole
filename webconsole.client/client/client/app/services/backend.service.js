System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', '../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, http_1, appglobals_service_1;
    var BackendServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            BackendServices = (function () {
                function BackendServices(_http, _appGlobals) {
                    var _this = this;
                    this._http = _http;
                    this._appGlobals = _appGlobals;
                    this._baseUrl = '';
                    this.headers = new http_1.Headers();
                    //console.log("BackendServices constructor");
                    _appGlobals._backendUrl.subscribe(function (value) { return _this._baseUrl = value; });
                    console.log("base url set to '" + this._baseUrl + "'");
                    if (this._baseUrl == "http://undefined:undefined/") {
                        this._baseUrl = "http://localhost:2002/";
                        console.log("base url undefined, setting back to default " + this._baseUrl);
                    }
                    this.headers.append('Authorization', 'Basic d2ViY29uc29sZTp3ZWJjb25zb2xl');
                    this.headers.append('Access-Control-Allow-Origin', '*');
                }
                BackendServices.prototype.get = function (path) {
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'Basic d2Vic29uc29sZTp3ZWJzb25zb2xl');
                    return this._http.get(this._baseUrl + path, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getFramework = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/framework', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getBundles = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/bundles', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getBundle = function (id) {
                    return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id, { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getBundleServices = function (id) {
                    return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/services", { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getBundleContents = function (id) {
                    return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents", { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getBundleFileContents = function (id, filename) {
                    return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents/" + filename, { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getServices = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/services', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getService = function (id) {
                    return this._http.get(this._baseUrl + 'backend/v1/services/' + id, { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getPackages = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/packages', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getMatchingPackages = function (part) {
                    return this._http.get(this._baseUrl + 'backend/v1/packages/' + part, { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getLogs = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/logs', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getSnapshots = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/snapshots', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.getLatestSnapshot = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/snapshotdetails/latest', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices.prototype.createSnapshot = function () {
                    return this._http.post(this._baseUrl + 'backend/v1/snapshots/', JSON.stringify("create"), { headers: this.headers });
                };
                BackendServices.prototype.getVersion = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/client/version', { headers: this.headers })
                        .map(function (res) { return res.text(); });
                };
                BackendServices.prototype.getRuntimeConfig = function () {
                    return this._http.get(this._baseUrl + 'backend/v1/runtimeconfig', { headers: this.headers })
                        .map(function (res) { return res.json(); });
                };
                BackendServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, appglobals_service_1.AppGlobals])
                ], BackendServices);
                return BackendServices;
            }());
            exports_1("BackendServices", BackendServices);
        }
    }
});

//# sourceMappingURL=backend.service.js.map
