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
    var D3ServiceDepDirective;
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
            D3ServiceDepDirective = (function () {
                function D3ServiceDepDirective(_el, _backend) {
                    this._el = _el;
                    this._backend = _backend;
                    this.rNodes = Array(); // requirererNodes
                    this.pNodes = Array(); // providerNodes
                }
                D3ServiceDepDirective.prototype.ngOnInit = function () {
                    var url = "http://localhost:2002/backend/v1/snapshotdetails/latest";
                    var identifier = "#d3serviceDep";
                    d3.json(url, function (error, data) {
                        if (error != null) {
                            console.log(error);
                        }
                        var nodes = Array();
                        var edges = Array();
                        var toCounter = new Map();
                        var filteredBundles = data.bundles.filter(function (el) {
                            //console.log(el.id);
                            return el; //el.id == 0 ? null : el;
                        });
                        filteredBundles.forEach(function (bundle) {
                            //console.log("creating new Node with id " + bundle.id);
                            nodes.push(new node_1.Node(bundle.id, bundle.symbolicName, 17, 500));
                            bundle.usedServiceIds.forEach(function (serviceId) {
                                var providingBundle = getProvidingBundle(serviceId);
                                //console.log(bundle.id + " => " + serviceId + " => " + providingBundle);
                                edges.push(new edge_1.Edge(bundle.id, providingBundle, 1));
                            });
                        });
                        function getProvidingBundle(serviceId) {
                            var result = null;
                            data.services.forEach(function (service) {
                                if (service.id == serviceId) {
                                    result = service.bundleId;
                                }
                            });
                            return result;
                        }
                        var nodeHash = {};
                        for (var x in nodes) {
                            nodeHash[nodes[x].id] = nodes[x];
                        }
                        ;
                        //console.log(nodeHash);
                        for (var x in edges) {
                            edges[x].weight = 1; //parseInt(edges[x].weight);
                            edges[x].source = nodeHash[edges[x].source];
                            edges[x].target = nodeHash[edges[x].target];
                        }
                        ;
                        //console.log(edges);
                        var weightScale = d3.scale.linear()
                            .domain(d3.extent(edges, function (d) { return d.weight; }))
                            .range([.3, 5]);
                        var force = d3.layout.force().charge(-2000)
                            .size([1000, 600])
                            .nodes(nodes)
                            .links(edges)
                            .on("tick", forceTick);
                        d3.select(identifier).selectAll("line.link")
                            .data(edges, function (d) { return d.source.id + "-" + d.target.id; })
                            .enter()
                            .append("line")
                            .attr("class", "link")
                            .style("stroke", "black")
                            .style("opacity", .5)
                            .style("stroke-width", function (d) { return weightScale(d.weight); });
                        var nodeEnter = d3.select(identifier).selectAll("g.node")
                            .data(nodes, function (d) { return d.id; })
                            .enter()
                            .append("g")
                            .attr("class", "node");
                        nodeEnter.append("circle")
                            .attr("r", function (d) { return 4; })
                            .style("fill", "lightgray")
                            .style("stroke", "black")
                            .style("stroke-width", "1px");
                        nodeEnter.append("text")
                            .style("text-anchor", "middle")
                            .attr("x", 18)
                            .attr("y", 18)
                            .text(function (d) { return d.id; });
                        force.start();
                        var marker = d3.select(identifier).append('defs')
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
                D3ServiceDepDirective = __decorate([
                    core_1.Directive({
                        selector: "[d3serviceDep]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, backend_service_1.BackendServices])
                ], D3ServiceDepDirective);
                return D3ServiceDepDirective;
            }());
            exports_1("D3ServiceDepDirective", D3ServiceDepDirective);
        }
    }
});

//# sourceMappingURL=d3serviceDep.directive.js.map
