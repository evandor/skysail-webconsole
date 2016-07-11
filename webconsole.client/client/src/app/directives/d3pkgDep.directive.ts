import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core'

import {BackendServices} from '../services/backend.service';

import * as d3 from 'd3';


@Directive({
    selector: "[d3PkgDep]"
})
export class D3PkgDepDirective {


    rNodes = Array<Node>(); // requirererNodes
    pNodes = Array<Node>(); // providerNodes

    constructor(private _el: ElementRef, private _backend: BackendServices) { }

    ngOnInit() {
        var url = "http://localhost:2002/backend/snapshotdetails/latest"
        d3.json(url, function (error, data) {
            if (error != null) {
                console.log(error);
            }

            var graph = d3.select("#d3PkgDep")
                .selectAll("g")
                .data(data.bundles)
                .enter()
                .append("g")
                .attr("transform", function(d,i) {
                    var y = 20 + i*20;
                    return "translate(100,"+y+")";
                })
                .style("fill", function(d) {return "white";})
                .style("stroke", "black")
                .style("stroke-width", "1px")
                .attr("y", function(d,i) {return i * 20});

            graph
                .append("text")
                .text(function(d) {return d.symbolicName;});

            graph
                .append("rect")
                .attr("width", 200)
                .attr("height", 18)
                .transition("translate(0,-18)")
                ;
        });
    }

}