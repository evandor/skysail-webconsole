System.register(['angular2/core', '../services/backend.service', 'd3'], function(exports_1, context_1) {
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
                    this.nodes = Array();
                }
                AdjacencyDirective.prototype.render = function () {
                    var edgeHash = {};
                    for (var x in this.edges) {
                        var id = this.edges[x].source + "-" + this.edges[x].target;
                        edgeHash[id] = this.edges[x];
                    }
                    ;
                    var matrix = [];
                    for (var a in this.nodes) {
                        for (var b in this.nodes) {
                            var grid = {
                                id: this.nodes[a].id + "-" + this.nodes[b].id,
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
                    var scaleSize = this.nodes.length * 25;
                    var nameScale = d3.scale.ordinal()
                        .domain(this.nodes.map(function (el) { return el.id; }))
                        .rangePoints([0, scaleSize], 1);
                    var xAxis = d3.svg.axis()
                        .scale(nameScale).orient("top").tickSize(4);
                    var yAxis = d3.svg.axis()
                        .scale(nameScale).orient("left").tickSize(4);
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
                        snapshot.bundles.forEach(function (bundle) {
                            _this.nodes.push(new Node(bundle.id, 17, 500));
                            var toCounter = new Map();
                            bundle.wireDescriptor.providedWires.forEach(function (wire) {
                                var requirerId = wire.requirerBundleId;
                                if (toCounter.has(requirerId)) {
                                    var old = toCounter.get(requirerId);
                                    toCounter.set(requirerId, old + 1);
                                }
                                else {
                                    toCounter.set(requirerId, 1);
                                }
                                toCounter.forEach(function (value, index, map) {
                                    //console.log(bundle.id + ": " + index + "/" + value);
                                    _this.edges.push(new Edge(bundle.id, index, value));
                                });
                            });
                        });
                        _this.render();
                    });
                    /*this._backend.getBundles()
                        .subscribe(res => {
                            res.forEach(bundle => {
                                this.nodes.push(new Node(bundle.id, 17, 500));
                                if (bundle.importPackage != null) {
                                    bundle.importPackage.forEach(importPackage => {
                                        console.log("importPackage: " + importPackage);
                                        var ids = Array<string>();
                                        if (importPackage != null) {
                                            importPackage.packageResolvingCandidates.forEach(candiate => {
                                                ids.push(candiate.exportingBundle.id);
                                            });
                                            ids.forEach(id => {
                                                console.log("new Edge(" + bundle.id + ", " + id + ", 1)");
                                                this.edges.push(new Edge(bundle.id, id, 1));
                                            })
                                        }
                                    });
                                }
                            });
                            this.render();
                        });*/
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