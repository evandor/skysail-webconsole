import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core'

import {BackendServices} from '../services/backend.service';
import {Node} from '../domain/node';
import {Edge} from '../domain/edge';

import * as d3 from 'd3';


@Directive({
    selector: "[d3BundleSizes]"
})
export class D3BundleSizesDirective {

    rNodes = Array<Node>(); // requirererNodes
    pNodes = Array<Node>(); // providerNodes

    constructor(private _el: ElementRef, private _backend: BackendServices) { }

    ngOnInit() {
        var url = "http://localhost:2002/backend/v1/bundles"
        d3.json(url, function (error, data) {
            if (error != null) {
                console.log(error);
            }
            var pieChart = d3.layout.pie();
            pieChart.value(function(d) {
                  return d.size;
              });
            var yourPie = pieChart(data);
            var newArc = d3.svg.arc();
            newArc.outerRadius(200);
            newArc.innerRadius(140);
 
            d3.select("#d3BundleSizes")
                .append("g")
                .attr("transform","translate(500,300)")
                .selectAll("path")
                .data(yourPie)
                .enter()
                .append("path")
                .attr("d", newArc)
                .style("fill", "blue")
                .style("opacity", .5)
                .style("stroke", "gray")
                .style("stroke-width", "2px");
        });
    }


}