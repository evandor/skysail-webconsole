import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core'

import {BackendServices} from '../services/backend.service';
import {Node} from '../domain/node';
import {Edge} from '../domain/edge';

import * as d3 from 'd3';


@Directive({
    selector: "[d3serviceDep]"
})
export class D3ServiceDepDirective {

    rNodes = Array<Node>(); // requirererNodes
    pNodes = Array<Node>(); // providerNodes

    constructor(private _el: ElementRef, private _backend: BackendServices) { }

    ngOnInit() {
        this._backend.getLatestSnapshot().subscribe(res => {
            
            var identifier = "#d3serviceDep";

            var nodes = Array<Node>();
            var edges = Array<Edge>();
            var toCounter = new Map<string, number>();

            var filteredBundles = res.bundles.filter(function(el) {
                //console.log(el.id);
                return el;//el.id == 0 ? null : el;
            });


            filteredBundles.forEach(bundle => {
                //console.log("creating new Node with id " + bundle.id);
                nodes.push(new Node(bundle.id, bundle.symbolicName, 17, 500));
                bundle.usedServiceIds.forEach(serviceId => {
                    var providingBundle = getProvidingBundle(serviceId);
                    //console.log(bundle.id + " => " + serviceId + " => " + providingBundle);
                    edges.push(new Edge(bundle.id, providingBundle, 1));
                });
            });

            function getProvidingBundle(serviceId: string) {
                var result = null;
                res.services.forEach(service => {
                    if (service.id == serviceId) {
                        result = service.bundleId;
                    }
                });
                return result;
            }

            var nodeHash = {};
            for (let x in nodes) {
                nodeHash[nodes[x].id] = nodes[x];
            };
            //console.log(nodeHash);
            for (let x in edges) {
                edges[x].weight = 1;//parseInt(edges[x].weight);
                edges[x].source = nodeHash[edges[x].source];
                edges[x].target = nodeHash[edges[x].target];
            };
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
                .style("stroke-width", function (d) { return weightScale(d.weight) });

            var nodeEnter = d3.select(identifier).selectAll("g.node")
                .data(nodes, function (d) { return d.id })
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
                    })
            }
        });
    }


}