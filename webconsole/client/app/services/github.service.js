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
    var GitHubService;
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
            GitHubService = (function () {
                function GitHubService(_http) {
                    this._http = _http;
                    this._baseUrl = "https://api.github.com/users/";
                }
                GitHubService.prototype.getUser = function (username) {
                    return this._http.get(this._baseUrl + username)
                        .map(function (res) { return res.json(); });
                };
                GitHubService.prototype.getFollowers = function (username) {
                    return this._http.get(this._baseUrl + username + "/followers")
                        .map(function (res) { return res.json(); });
                };
                GitHubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GitHubService);
                return GitHubService;
            }());
            exports_1("GitHubService", GitHubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map