System.register(['@angular/core', '../services/appglobals.service'], function(exports_1, context_1) {
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
    var core_1, appglobals_service_1;
    var LinkPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appglobals_service_1_1) {
                appglobals_service_1 = appglobals_service_1_1;
            }],
        execute: function() {
            LinkPipe = (function () {
                function LinkPipe(_appGlobals) {
                    this._appGlobals = _appGlobals;
                }
                LinkPipe.prototype.transform = function (text, args) {
                    if (text.startsWith('http')) {
                        return "<a href='" + text + "' target='_blank'>" + text + "</a>";
                    }
                    return text;
                };
                LinkPipe = __decorate([
                    core_1.Pipe({
                        name: 'link'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [appglobals_service_1.AppGlobals])
                ], LinkPipe);
                return LinkPipe;
            }());
            exports_1("LinkPipe", LinkPipe);
        }
    }
});

//# sourceMappingURL=link.pipe.js.map
