System.register(['@angular/core', '../services/backend.service', 'd3'], function(exports_1, context_1) {
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
    var core_1, backend_service_1, d3;
    var D3BundleSizesDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            D3BundleSizesDirective = (function () {
                function D3BundleSizesDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    this.rNodes = Array(); // requirererNodes
                    this.pNodes = Array(); // providerNodes
                }
                D3BundleSizesDirective.prototype.ngOnInit = function () {
                    this._backend.getBundles().subscribe(function (res) {
                        var pieChart = d3.layout.pie();
                        pieChart.value(function (d) {
                            return d.size;
                        });
                        var yourPie = pieChart(res);
                        var newArc = d3.svg.arc();
                        newArc.outerRadius(200);
                        newArc.innerRadius(140);
                        d3.select("#d3BundleSizes")
                            .append("g")
                            .attr("transform", "translate(500,300)")
                            .selectAll("path")
                            .data(yourPie)
                            .enter()
                            .append("path")
                            .attr("d", newArc)
                            .style("fill", "blue")
                            .style("opacity", .5)
                            .style("stroke", "gray")
                            .style("stroke-width", "2px");
                    });
                };
                D3BundleSizesDirective = __decorate([
                    core_1.Directive({
                        selector: "[d3BundleSizes]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, backend_service_1.BackendServices])
                ], D3BundleSizesDirective);
                return D3BundleSizesDirective;
            }());
            exports_1("D3BundleSizesDirective", D3BundleSizesDirective);
        }
    }
});

//# sourceMappingURL=d3bundlesizes.directive.js.map
