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
    var D3PkgDepDirective;
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
            D3PkgDepDirective = (function () {
                function D3PkgDepDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    this.rNodes = Array(); // requirererNodes
                    this.pNodes = Array(); // providerNodes
                }
                D3PkgDepDirective.prototype.ngOnInit = function () {
                    var url = "http://localhost:2002/backend/snapshotdetails/latest";
                    d3.json(url, function (error, data) {
                        if (error != null) {
                            console.log(error);
                        }
                        var graph = d3.select("#d3PkgDep")
                            .selectAll("g")
                            .data(data.bundles)
                            .enter()
                            .append("g")
                            .attr("transform", function (d, i) {
                            var y = 20 + i * 20;
                            return "translate(100," + y + ")";
                        })
                            .style("fill", function (d) { return "white"; })
                            .style("stroke", "black")
                            .style("stroke-width", "1px")
                            .attr("y", function (d, i) { return i * 20; });
                        graph
                            .append("text")
                            .text(function (d) { return d.symbolicName; });
                        graph
                            .append("rect")
                            .attr("width", 200)
                            .attr("height", 18)
                            .transition("translate(0,-18)");
                    });
                };
                D3PkgDepDirective = __decorate([
                    core_1.Directive({
                        selector: "[d3PkgDep]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, backend_service_1.BackendServices])
                ], D3PkgDepDirective);
                return D3PkgDepDirective;
            }());
            exports_1("D3PkgDepDirective", D3PkgDepDirective);
        }
    }
});

//# sourceMappingURL=d3pkgDep.directive.js.map
