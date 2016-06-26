import {Component, ElementRef, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES, SlicePipe} from '@angular/common';
import {RangePipe} from '../../pipes/Range/Range';

@Component({
    selector: 'pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    properties: [
        "totalPages: total-pages",
        "pagesAtOnce: pages-at-once"
    ],
    templateUrl: 'components/Pagination/Pagination.html',
    directives: [CORE_DIRECTIVES],
    pipes: [SlicePipe, RangePipe]
})
export class Pagination implements OnChanges {
    @Input() currentPage: number = 1;
    @Input() pagesAtOnce: number = 5;
    @Input() totalPages: number = 10;
    @Input() showSteps: boolean = true;
    @Input() showEnds: boolean = true;
    @Input() showSelect: boolean = true;
    @Output() currentPageChange = new EventEmitter<any>();
    pagesBlank:Array<number> = [];
    startingIndex:number;
    endingIndex:number;

    constructor(){
        this.setPage(this.currentPage);
    }

    ngOnChanges(changes:any):void{
        this.setPage(this.currentPage);
    }

    setPage(newPage:number):void{
        if(newPage < 1 || newPage > this.totalPages) return;

        this.currentPage = newPage;

        //Shift pagination stuffs
        if(this.currentPage - Math.ceil(this.pagesAtOnce / 2) < 0 || this.totalPages - this.pagesAtOnce <= 0){
            this.startingIndex = 0;
            this.endingIndex = this.pagesAtOnce;
        }
        else if(this.totalPages - this.currentPage <= this.pagesAtOnce - Math.ceil(this.pagesAtOnce / 2)) {
            this.startingIndex = this.totalPages - this.pagesAtOnce;
            this.endingIndex = this.totalPages;
        }
        else {
            this.startingIndex = this.currentPage - Math.ceil(this.pagesAtOnce / 2);
            this.endingIndex = this.startingIndex + this.pagesAtOnce < this.totalPages
                                ? this.startingIndex + this.pagesAtOnce
                                : this.totalPages;
        }

        this.currentPageChange.next(this.currentPage);
    }
}

export var PAGINATION_PROVIDERS = [
    Pagination
];