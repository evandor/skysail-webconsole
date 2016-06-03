import {OnInit} from 'angular2/core';
import {Component, Directive, View, Attribute, ElementRef} from 'angular2/core'; // onChange
//import {Inject} from 'angular2/di';
import * as d3 from 'd3/index';

@Directive({
    selector: 'barGraph',
    //lifecycle:  [ OnChange ],
    host: {
        '(change)': 'onChange()'
    },
    properties: ['data']
})
export class BarGraph {
    data: Array<number>;
    divs: any;
    
    constructor(
        private elementRef: ElementRef,
        @Attribute('width') width: string,
        @Attribute('height') height: string) {

        var el: any = elementRef.nativeElement;
        //this.elementRef.nativeElement.find('#example');
        
        //var graph: any = d3.select(el);

       /* this.divs = graph.
            append('div').
            attr({
                'class': 'chart'
            }).
            style({
                'width': width + 'px',
                'height': height + 'px',
            }).
            selectAll('div');*/
    }

    render(newValue) {
        if (!newValue) return;

        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', d => d + '%')
            .text(d => d + '%');

    }

    onChange() {
        this.render(this.data);
    }
}
