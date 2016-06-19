import {Component, Directive, ElementRef} from '@angular/core'

import * as d3 from 'd3';

@Directive({
    selector: "[d3]"
})
export class D3Directive {

    data = [4, 8, 15, 16, 23, 42];

    constructor(el: ElementRef) {

        d3.select(".chart")
            .selectAll("div")
            .data(this.data)
            .enter().append("div")
            .style("width", function (d) { return d * 10 + "px"; })
            .text(function (d) { return d; });
    }
}