System.register(["@angular/core", './window.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, window_service_1, http_1;
    var ConfigService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ConfigService = (function () {
                function ConfigService(windows, http) {
                    this.windows = windows;
                    this.http = http;
                    this.host = location.hostname;
                    this.port = "2002";
                    this.host = location.hostname;
                    // does not make sense to define host and port here...
                    /*http.get('config.json')
                        .map(res => res.json())
                        .subscribe((config:any) => {
                            this.host = config.host;
                            this.port = config.port;
                        })*/
                }
                ConfigService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [window_service_1.WindowService, http_1.Http])
                ], ConfigService);
                return ConfigService;
            }());
            exports_1("ConfigService", ConfigService);
        }
    }
});

//# sourceMappingURL=config.service.js.map
