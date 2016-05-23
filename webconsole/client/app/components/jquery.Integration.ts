import {Component, ElementRef, Inject, OnInit} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'jquery-integration',
    templateUrl: '/app/html/jquery-integration.html'
})

export class JqueryIntegration { //implements OnInit {

    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
    	console.log("ngOnInit in jquery.integration");
        //jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({containment:'#draggable-parent'});
        // $('#example').DataTable();
        jQuery(this.elementRef.nativeElement).find('#example').DataTable();
    }
}
