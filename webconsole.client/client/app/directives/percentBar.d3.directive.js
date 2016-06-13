System.register(['angular2/core', 'd3'], function(exports_1, context_1) {
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
    var core_1, d3;
    var PercentBarDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            PercentBarDirective = (function () {
                function PercentBarDirective(_el) {
                    this._el = _el;
                    this.data = [];
                }
                PercentBarDirective.prototype.render = function () {
                    this.data.push(Number(this.value) / Number(this.maxValue) * Number(this.maxWidth));
                    d3.select(this._el.nativeElement)
                        .selectAll("div")
                        .data(this.data)
                        .enter().append("div")
                        .style("width", function (d) { return d * 1 + "px"; })
                        .text(function (d) { return d; });
                };
                PercentBarDirective.prototype.ngOnInit = function () {
                    this.render();
                };
                __decorate([
                    core_1.Input('d3MaxWidth'), 
                    __metadata('design:type', String)
                ], PercentBarDirective.prototype, "maxWidth", void 0);
                __decorate([
                    core_1.Input('d3MaxValue'), 
                    __metadata('design:type', String)
                ], PercentBarDirective.prototype, "maxValue", void 0);
                __decorate([
                    core_1.Input('d3PercentBar'), 
                    __metadata('design:type', String)
                ], PercentBarDirective.prototype, "value", void 0);
                __decorate([
                    core_1.Input('id'), 
                    __metadata('design:type', String)
                ], PercentBarDirective.prototype, "id", void 0);
                PercentBarDirective = __decorate([
                    core_1.Directive({
                        selector: "[d3PercentBar]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PercentBarDirective);
                return PercentBarDirective;
            }());
            exports_1("PercentBarDirective", PercentBarDirective);
        }
    }
});
//# sourceMappingURL=percentBar.d3.directive.js.map