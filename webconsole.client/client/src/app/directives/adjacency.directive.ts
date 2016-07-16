import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core'

import {BackendServices} from '../services/backend.service';

import {Node} from '../domain/node';
import {Edge} from '../domain/edge';

import * as d3 from 'd3';

@Directive({
    selector: "[adjacency]"
})
export class AdjacencyDirective implements OnInit {

    edges = Array<Edge>();

    rNodes = Array<Node>(); // requirererNodes
    pNodes = Array<Node>(); // providerNodes

    constructor(private _el: ElementRef, private _backend: BackendServices) { }

    render() {
        var edgeHash = {};
        for (var x in this.edges) {
            var id = this.edges[x].source + "-" + this.edges[x].target;
            edgeHash[id] = this.edges[x];
        };
        var matrix = [];
        for (var a in this.pNodes) {
            for (var b in this.rNodes) {
                var grid =
                    {
                        id: this.pNodes[a].id + "-" + this.rNodes[b].id,
                        x: b, y: a, weight: 0
                    };
                if (edgeHash[grid.id]) {
                    grid.weight = edgeHash[grid.id].weight;
                };
                matrix.push(grid);
            };
        };
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
            .attr("x", function (d) { return d.x * 25 })
            .attr("y", function (d) { return d.y * 25 })
            .style("fill-opacity", function (d) { return d.weight * .2; })
        var scaleSize = this.pNodes.length * 25;
        var pNameScale = d3.scale.ordinal()
            .domain(this.pNodes.map(function (el) { return el.id }))
            .rangePoints([0, scaleSize], 1);
        var rNameScale = d3.scale.ordinal()
            .domain(this.rNodes.map(function (el) { return el.id }))
            .rangePoints([0, scaleSize], 1);
        var xAxis = d3.svg.axis()
            .scale(rNameScale).orient("top").tickSize(4);
        var yAxis = d3.svg.axis()
            .scale(pNameScale).orient("left").tickSize(4);
        d3.select("#adjacencyG").append("g").call(yAxis);
        d3.select("#adjacencyG").append("g").call(xAxis)
            .selectAll("text")

        d3.selectAll("rect.grid").on("mouseover", gridOver);
        function gridOver(d, i) {
            d3.selectAll("rect").style("stroke-width", function (p) {
                return p.x == d.x || p.y == d.y ? "3px" : "1px"
            });
        };

    }

    ngOnInit() {

        this._backend.getLatestSnapshot()
            .subscribe(snapshot => {
                var allNodes = Array<Node>();
                snapshot.bundles.forEach(bundle => {
                    if (bundle.id == "0") {
                        return;
                    }
                    allNodes.push(new Node(bundle.id, bundle.symbolicName, 17, 500));
                    var toCounter = new Map<string, number>();

                    var arr = Object.keys(bundle.wireDescriptor.providedWires).map(function (key) {
                        return {
                            key: key,
                            value: bundle.wireDescriptor.providedWires[key]
                        }
                    });
                    arr.forEach(wire => {
                        //console.log(wire);
                        this.edges.push(new Edge(bundle.id, wire.key, wire.value));
                    });

                })
                allNodes.forEach(node => {
                    if (this.getEdgeCount(node) > 0) {
                        // this.nodes.push(node);
                    }
                    if (this.hasRequirements(node)) {
                        this.rNodes.push(node);
                    }
                    if (this.hasCapabilities(node)) {
                        this.pNodes.push(node);
                    }
                })
                this.render();
            });
    }

    hasRequirements(node: Node): boolean {
        for (var e of this.edges) {
            if (e.target == node.id) {
                return true;
            }
        }
        return false;
    }

    hasCapabilities(node: Node): boolean {
        for (var e of this.edges) {
            if (e.source == node.id) {
                return true;
            }
        }
        return false;
    }

    getEdgeCount(node: Node): number {
        for (var e of this.edges) {
            if (e.target == node.id) {
                return 1;
            }
        }
        return 1;
    }


}