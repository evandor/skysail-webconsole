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
    var Edge, Node, AdjacencyDirective;
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
            Edge = (function () {
                function Edge(source, target, weight) {
                    this.source = source;
                    this.target = target;
                    this.weight = weight;
                }
                return Edge;
            }());
            Node = (function () {
                function Node(id, followers, following) {
                    this.id = id;
                    this.followers = followers;
                    this.following = following;
                }
                return Node;
            }());
            AdjacencyDirective = (function () {
                function AdjacencyDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    /* @Input('d3MaxWidth') maxWidth: string;
                     @Input('d3MaxValue') maxValue: string;
                     @Input('d3PercentBar') value: string;
                     @Input('id') id: string;*/
                    // data: Array<number> = [];
                    this.edges = Array();
                    //nodes = Array<Node>();
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
                            allNodes.push(new Node(bundle.id, 17, 500));
                            var toCounter = new Map();
                            bundle.wireDescriptor.providedWires.forEach(function (wire) {
                                var requirerId = wire.rid;
                                if (toCounter.has(requirerId)) {
                                    var old = toCounter.get(requirerId);
                                    toCounter.set(requirerId, old + 1);
                                }
                                else {
                                    toCounter.set(requirerId, 1);
                                }
                                toCounter.forEach(function (value, index, map) {
                                    if (index != "0") {
                                        // console.log(bundle.id + ": " + index + "/" + value);
                                        _this.edges.push(new Edge(bundle.id, index, value));
                                    }
                                });
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
