System.register(['@angular/core', '../services/backend.service', '../domain/node', '../domain/edge', 'd3'], function(exports_1, context_1) {
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
    var core_1, backend_service_1, node_1, edge_1, d3;
    var AdjacencyDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            },
            function (node_1_1) {
                node_1 = node_1_1;
            },
            function (edge_1_1) {
                edge_1 = edge_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            AdjacencyDirective = (function () {
                function AdjacencyDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    this.edges = Array();
                    this.rNodes = Array(); // requirererNodes
                    this.pNodes = Array(); // providerNodes
                }
                AdjacencyDirective.prototype.render = function () {
                    var edgeHash = {};
                    for (var x in this.edges) {
                        var id = this.edges[x].source + "-" + this.edges[x].target;
                        edgeHash[id] = this.edges[x];
                    }
                    ;
                    var matrix = [];
                    for (var a in this.pNodes) {
                        for (var b in this.rNodes) {
                            var grid = {
                                id: this.pNodes[a].id + "-" + this.rNodes[b].id,
                                x: b, y: a, weight: 0
                            };
                            if (edgeHash[grid.id]) {
                                grid.weight = edgeHash[grid.id].weight;
                            }
                            ;
                            matrix.push(grid);
                        }
                        ;
                    }
                    ;
                    d3.select("svg")
                        .append("g")
                        .attr("transform", "translate(50,50)")
                        .attr("id", "adjacencyG")
                        .selectAll("rect")
                        .data(matrix)
                        .enter()
                        .append("rect")
                        .attr("class", "grid")
                        .attr("width", 25)
                        .attr("height", 25)
                        .attr("x", function (d) { return d.x * 25; })
                        .attr("y", function (d) { return d.y * 25; })
                        .style("fill-opacity", function (d) { return d.weight * .2; });
                    var scaleSize = this.pNodes.length * 25;
                    var pNameScale = d3.scale.ordinal()
                        .domain(this.pNodes.map(function (el) { return el.id; }))
                        .rangePoints([0, scaleSize], 1);
                    var rNameScale = d3.scale.ordinal()
                        .domain(this.rNodes.map(function (el) { return el.id; }))
                        .rangePoints([0, scaleSize], 1);
                    var xAxis = d3.svg.axis()
                        .scale(rNameScale).orient("top").tickSize(4);
                    var yAxis = d3.svg.axis()
                        .scale(pNameScale).orient("left").tickSize(4);
                    d3.select("#adjacencyG").append("g").call(yAxis);
                    d3.select("#adjacencyG").append("g").call(xAxis)
                        .selectAll("text");
                    d3.selectAll("rect.grid").on("mouseover", gridOver);
                    function gridOver(d, i) {
                        d3.selectAll("rect").style("stroke-width", function (p) {
                            return p.x == d.x || p.y == d.y ? "3px" : "1px";
                        });
                    }
                    ;
                };
                AdjacencyDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    this._backend.getLatestSnapshot()
                        .subscribe(function (snapshot) {
                        var allNodes = Array();
                        snapshot.bundles.forEach(function (bundle) {
                            if (bundle.id == "0") {
                                return;
                            }
                            allNodes.push(new node_1.Node(bundle.id, bundle.symbolicName, 17, 500));
                            var toCounter = new Map();
                            var arr = Object.keys(bundle.wireDescriptor.providedWires).map(function (key) {
                                return {
                                    key: key,
                                    value: bundle.wireDescriptor.providedWires[key]
                                };
                            });
                            arr.forEach(function (wire) {
                                //console.log(wire);
                                _this.edges.push(new edge_1.Edge(bundle.id, wire.key, wire.value));
                            });
                        });
                        allNodes.forEach(function (node) {
                            if (_this.getEdgeCount(node) > 0) {
                            }
                            if (_this.hasRequirements(node)) {
                                _this.rNodes.push(node);
                            }
                            if (_this.hasCapabilities(node)) {
                                _this.pNodes.push(node);
                            }
                        });
                        _this.render();
                    });
                };
                AdjacencyDirective.prototype.hasRequirements = function (node) {
                    for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.target == node.id) {
                            return true;
                        }
                    }
                    return false;
                };
                AdjacencyDirective.prototype.hasCapabilities = function (node) {
                    for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.source == node.id) {
                            return true;
                        }
                    }
                    return false;
                };
                AdjacencyDirective.prototype.getEdgeCount = function (node) {
                    for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.target == node.id) {
                            return 1;
                        }
                    }
                    return 1;
                };
                AdjacencyDirective = __decorate([
                    core_1.Directive({
                        selector: "[adjacency]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, backend_service_1.BackendServices])
                ], AdjacencyDirective);
                return AdjacencyDirective;
            }());
            exports_1("AdjacencyDirective", AdjacencyDirective);
        }
    }
});

//# sourceMappingURL=adjacency.directive.js.map
