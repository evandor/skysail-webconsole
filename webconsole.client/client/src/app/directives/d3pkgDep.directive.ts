import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core'

import {BackendServices} from '../services/backend.service';
import {Node} from '../domain/node';
import {Edge} from '../domain/edge';

import * as d3 from 'd3';


@Directive({
    selector: "[d3PkgDep]"
})
export class D3PkgDepDirective {

    rNodes = Array<Node>(); // requirererNodes
    pNodes = Array<Node>(); // providerNodes

    constructor(private _el: ElementRef, private _backend: BackendServices) { }

    ngOnInit() {
        var url = "http://localhost:2002/backend/v1/snapshotdetails/latest"
        d3.json(url, function (error, data) {
            if (error != null) {
                console.log(error);
            }

            var nodes = Array<Node>();
            var edges = Array<Edge>();
            var toCounter = new Map<string, number>();


            data.bundles.forEach(bundle => {
                //console.log("creating new Node with id " + bundle.id);
                nodes.push(new Node(bundle.id, bundle.symbolicName, 17, 500));
                bundle.wireDescriptor.providedWires.forEach(wire => {
                    var requirerId = wire.rid;
                    if (toCounter.has(requirerId)) {
                        var old = toCounter.get(requirerId);
                        toCounter.set(requirerId, old + 1);
                    } else {
                        toCounter.set(requirerId, 1);
                    }
                    toCounter.forEach((value, index, map) => {
                        if (index != "0") {
                            //console.log(bundle.id + ": " + index + "/" + value);
                           edges.push(new Edge(bundle.id, index, value));
                        }
                    });
                });
            });

            var nodeHash = {};
            for (let x in nodes) {
                nodeHash[nodes[x].id] = nodes[x];
            };
            //console.log(nodeHash);
            for (let x in edges) {
                edges[x].weight = parseInt(edges[x].weight);
                edges[x].source = nodeHash[edges[x].source];
                edges[x].target = nodeHash[edges[x].target];
            };
            //console.log(edges);

            var weightScale = d3.scale.linear()
                .domain(d3.extent(edges, function (d) { return d.weight; }))
                .range([.1, 1]);
            console.log(weightScale);

            var force = d3.layout.force().charge(-1000)
                .size([500, 500])
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
                .style("stroke-width", function (d) { return d.weight });

            var nodeEnter = d3.select("#d3PkgDep").selectAll("g.node")
                .data(nodes, function (d) { return d.id })
                .enter()
                .append("g")
                .attr("class", "node");

            nodeEnter.append("circle")
                .attr("r", 5)
                .style("fill", "lightgray")
                .style("stroke", "black")
                .style("stroke-width", "1px");
            
            nodeEnter.append("text")
                .style("text-anchor", "middle")
                .attr("y", 15)
                .text(function (d) { return d.id; });
            
            force.start();
            /*var graph = d3.select("#d3PkgDep")
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
                .attr("y", function (d, i) { return i * 20 });

            graph
                .append("text")
                .text(function (d) { return d.symbolicName; });

            graph
                .append("rect")
                .attr("width", 200)
                .attr("height", 18)
                .transition("translate(0,-18)")
                ;*/

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