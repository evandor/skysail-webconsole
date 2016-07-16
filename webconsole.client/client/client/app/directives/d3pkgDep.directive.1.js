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
    var D3PkgDepDirective;
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
            D3PkgDepDirective = (function () {
                function D3PkgDepDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    this.rNodes = Array(); // requirererNodes
                    this.pNodes = Array(); // providerNodes
                }
                D3PkgDepDirective.prototype.ngOnInit = function () {
                    var url = "http://localhost:2002/backend/v1/snapshotdetails/latest";
                    d3.json(url, function (error, data) {
                        if (error != null) {
                            console.log(error);
                        }
                        var nodes = Array();
                        var edges = Array();
                        var toCounter = new Map();
                        data.bundles.forEach(function (bundle) {
                            //console.log("creating new Node with id " + bundle.id);
                            nodes.push(new node_1.Node(bundle.id, bundle.symbolicName, 17, 500));
                            //console.log(bundle.wireDescriptor.providedWires);
                            var arr = Object.keys(bundle.wireDescriptor.providedWires).map(function (key) {
                                return {
                                    key: key,
                                    value: bundle.wireDescriptor.providedWires[key]
                                };
                            });
                            arr.forEach(function (wire) {
                                //console.log(wire);
                                edges.push(new edge_1.Edge(bundle.id, wire.key, wire.value));
                            });
                        });
                        var nodeHash = {};
                        for (var x in nodes) {
                            nodeHash[nodes[x].id] = nodes[x];
                        }
                        ;
                        //console.log(nodeHash);
                        for (var x in edges) {
                            edges[x].weight = parseInt(edges[x].weight);
                            edges[x].source = nodeHash[edges[x].source];
                            edges[x].target = nodeHash[edges[x].target];
                        }
                        ;
                        //console.log(edges);
                        var weightScale = d3.scale.linear()
                            .domain(d3.extent(edges, function (d) { return d.weight; }))
                            .range([.1, 1]);
                        var force = d3.layout.force().charge(-1000)
                            .size([1000, 600])
                            .nodes(nodes)
                            .links(edges)
                            .on("tick", forceTick);
                        d3.select("#d3PkgDep").selectAll("line.link")
                            .data(edges, function (d) { return d.source.id + "-" + d.target.id; })
                            .enter()
                            .append("line")
                            .attr("class", "link")
                            .style("stroke", "black")
                            .style("opacity", .5)
                            .style("stroke-width", function (d) { return d.weight; });
                        var nodeEnter = d3.select("#d3PkgDep").selectAll("g.node")
                            .data(nodes, function (d) { return d.id; })
                            .enter()
                            .append("g")
                            .attr("class", "node");
                        nodeEnter.append("circle")
                            .attr("r", function (d) { return 10; })
                            .style("fill", "lightgray")
                            .style("stroke", "black")
                            .style("stroke-width", "1px");
                        nodeEnter.append("text")
                            .style("text-anchor", "middle")
                            .attr("y", 15)
                            .text(function (d) { return d.id; });
                        force.start();
                        var marker = d3.select("#d3PkgDep").append('defs')
                            .append('marker')
                            .attr("id", "Triangle")
                            .attr("refX", 12)
                            .attr("refY", 6)
                            .attr("markerUnits", 'userSpaceOnUse')
                            .attr("markerWidth", 12)
                            .attr("markerHeight", 18)
                            .attr("orient", 'auto')
                            .append('path')
                            .attr("d", 'M 0 0 12 6 0 12 3 6');
                        d3.selectAll("line").attr("marker-end", "url(#Triangle)");
                        function forceTick() {
                            d3.selectAll("line.link")
                                .attr("x1", function (d) { return d.source.x; })
                                .attr("x2", function (d) { return d.target.x; })
                                .attr("y1", function (d) { return d.source.y; })
                                .attr("y2", function (d) { return d.target.y; });
                            d3.selectAll("g.node")
                                .attr("transform", function (d) {
                                return "translate(" + d.x + "," + d.y + ")";
                            });
                        }
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

//# sourceMappingURL=d3pkgDep.directive.1.js.map
