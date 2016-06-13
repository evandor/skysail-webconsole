import {Component, Directive, ElementRef, Input, OnInit} from 'angular2/core'

import * as d3 from 'd3';

@Directive({
    selector: "[d3PercentBar]"
})
export class PercentBarDirective implements OnInit {

    @Input('d3MaxWidth') maxWidth: string;
    @Input('d3MaxValue') maxValue: string;
    @Input('d3PercentBar') value: string;
    @Input('id') id: string;

    data: Array<number> = [];

    constructor(private _el: ElementRef) { }

    render() {
        this.data.push(Number(this.value) / Number(this.maxValue) * Number(this.maxWidth));
        d3.select(this._el.nativeElement)
            .selectAll("div")
            .data(this.data)
            .enter().append("div")
            .style("width", function (d) { return d * 1 + "px"; })
            .text(function (d) { return d; });
    }

    ngOnInit() {
        this.render();
    }


}