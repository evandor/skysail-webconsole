import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'alert',
    templateUrl: 'components/Alert/Alert.html',
    directives: [CORE_DIRECTIVES]
})
export class Alert {
    private _el:HTMLElement;
    @Input() displayed: boolean = false;
    @Input() closeButton: boolean = true;
    @Input() type: string = 'success';
    @Output() displayedChange = new EventEmitter<any>();

    constructor(el: ElementRef){
        this._el = el.nativeElement;
    }

    getElement(): HTMLElement{
        return this._el;
    }

    close():void{
        this.displayed = false;
        this.displayedChange.next(null);
    }
}

export var ALERT_PROVIDERS = [
    Alert
];