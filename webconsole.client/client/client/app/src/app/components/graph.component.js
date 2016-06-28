System.register(['@angular/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var BarGraph;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Inject} from 'angular2/di';
            //import * as d3 from 'd3/index';
            BarGraph = (function () {
                function BarGraph(elementRef, width, height) {
                    this.elementRef = elementRef;
                    console.log("hier");
                    var el = elementRef.nativeElement;
                    //this.elementRef.nativeElement.find('#example');
                    /*var graph: any = d3.select(el);
                    this.divs = graph.
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
                BarGraph.prototype.render = function (newValue) {
                    if (!newValue)
                        return;
                    this.divs.data(newValue).enter().append('div')
                        .transition().ease('elastic')
                        .style('width', function (d) { return d + '%'; })
                        .text(function (d) { return d + '%'; });
                };
                BarGraph.prototype.onChange = function () {
                    this.render(this.data);
                };
                BarGraph = __decorate([
                    // onChange
                    core_1.Directive({
                        selector: 'barGraph',
                        //lifecycle:  [ OnChange ],
                        host: {
                            '(change)': 'onChange()'
                        },
                        properties: ['data']
                    }),
                    __param(1, core_1.Attribute('width')),
                    __param(2, core_1.Attribute('height')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, String])
                ], BarGraph);
                return BarGraph;
            }());
            exports_1("BarGraph", BarGraph);
        }
    }
});

//# sourceMappingURL=graph.component.js.map
