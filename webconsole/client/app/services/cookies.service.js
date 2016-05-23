System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var CookieService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CookieService = (function () {
                function CookieService() {
                    this.cookies = Cookies; // Cookies is a global scope object
                }
                CookieService.prototype.getCookie = function (cookieName) {
                    return this.cookies.get(cookieName);
                };
                CookieService.prototype.getAllCookies = function () {
                    return this.cookies.get();
                };
                CookieService.prototype.setCookie = function (name, value, path, domain, expiresInDays) {
                    if (path === void 0) { path = '/'; }
                    if (expiresInDays === void 0) { expiresInDays = 0; }
                    var options = {};
                    options.path = path;
                    if (domain) {
                        options.domain = domain;
                    }
                    if (expiresInDays > 0) {
                        options.expires = expiresInDays;
                    }
                    this.cookies.set(name, value, options);
                };
                CookieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CookieService);
                return CookieService;
            }());
            exports_1("CookieService", CookieService);
        }
    }
});
//# sourceMappingURL=cookies.service.js.map