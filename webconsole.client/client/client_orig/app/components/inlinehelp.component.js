System.register(['@angular/core', "@angular/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var InlineHelp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            InlineHelp = (function () {
                function InlineHelp(_activatedRoute) {
                    var _this = this;
                    this._activatedRoute = _activatedRoute;
                    this.identifier = 'inlineHelp_';
                    this.hidePageHelpFor = '';
                    this._activatedRoute.params.subscribe(function (params) {
                        _this.hidePageHelpFor = localStorage.getItem(_this.identifier + _this._activatedRoute.url);
                        if (_this.hidePageHelpFor == null) {
                            _this.hidePageHelpFor = '';
                        }
                    });
                }
                InlineHelp.prototype.isShown = function (id) {
                    var str = localStorage.getItem(this.identifier + this._activatedRoute.url);
                    if (str == null) {
                        return true;
                    }
                    return (str.indexOf("," + id) === -1);
                };
                InlineHelp.prototype.hidePermanently = function (id) {
                    this.hidePageHelpFor += "," + id;
                    localStorage.setItem(this.identifier + this._activatedRoute.url, this.hidePageHelpFor);
                };
                InlineHelp.prototype.showAllInlineHelp = function () {
                    this.hidePageHelpFor = '';
                    localStorage.removeItem(this.identifier + this._activatedRoute.url);
                };
                InlineHelp = __decorate([
                    core_1.Component({
                        selector: 'inlinehelp',
                        inputs: [
                            'inlineHelpId:id',
                            'category',
                            'closeText:closeText'
                        ],
                        template: "\n      <div *ngIf=\"isShown(inlineHelpId)\" class=\"alert alert-warning alert-dismissible fade in\" role=\"alert\" style=\"font-size:small\">\n      <button type=\"button\" class=\"close small\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"hidePermanently(inlineHelpId)\"\n        style=\"font-size:small\"><span aria-hidden=\"true\">&times;&nbsp;{{closeText}}</span></button>\n      <ng-content></ng-content>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], InlineHelp);
                return InlineHelp;
            }());
            exports_1("InlineHelp", InlineHelp);
        }
    }
});

//# sourceMappingURL=inlinehelp.component.js.map
