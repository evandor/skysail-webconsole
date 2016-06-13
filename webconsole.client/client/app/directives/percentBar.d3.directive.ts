import {Component, Directive, ElementRef, Input, OnInit} from 'angular2/core'

import * as d3 from 'd3';

@Directive({
    selector: "[d3PercentBar]",
    properties: ['theData: data', 'maxValue']
})
export class PercentBarDirective implements OnInit {

    @Input('d3MaxWidth') maxWidth: string;
    @Input('d3MaxValue') maxValue: string;
    @Input('d3PercentBar') value: string;
    @Input('id') id: string;

    data: Array<number> = [];

     constructor(private _el: ElementRef) {}

    render() {
        console.log("rendering: " +this.id + "/" + this.value+ "/" + this.maxValue+ "/" + this.maxWidth);
        this.data.push(Number(this.value) / Number(this.maxValue) * Number(this.maxWidth));
        console.log(this._el.nativeElement);

        var el: any = this._el.nativeElement; 
        d3.select(el)
            .selectAll("div")
            .data(this.data)
            .enter().append("div")
            .style("width", function (d) { return d * 1 + "px"; })
            .text(function (d) { return d; });
    }

    ngOnInit() {
        console.log("oninit called!");
        this.render();
    }


}