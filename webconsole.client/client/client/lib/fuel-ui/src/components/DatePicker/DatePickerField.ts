import {Component, Directive, Input, Output, HostBinding, HostListener, OnInit, EventEmitter} from "@angular/core";
import {DateUtils} from "../../utilities/utilities";

@Directive({
    selector: "[dateField], .date-field"
})
export class DatePickerField implements OnInit {
    private _date = new Date();
    
    @HostBinding("value")
    _value = "";
    
    @Input()
    set value(value: string) {
        if(value == this._value)
            return;
        
        this._value = value;
        this._date = DateUtils.handleDateInput(value);
        this.valueChange.next(value);
        this.ngModelChange.next(value);
        this.dateChange.next(this._date);
    }
    get value(): string {return this._value;}
    
    @Output() valueChange = new EventEmitter<string>();
    
    @Input()
    set ngModel(value: any) {
        this.value = value;
    }
    
    @Output()
    ngModelChange = new EventEmitter<any>();
    
    @Input()
    set date(date: Date) {
        if(date.getTime() == this._date.getTime())
            return;
            
        this._date = date;
        this._value = date.toLocaleDateString();
        this.dateChange.next(date);
        this.ngModelChange.next(this._value);
        this.valueChange.next(this._value);
    }
    get date(): Date {return this._date;}
    @Output() dateChange = new EventEmitter<Date>();
    
    @HostListener("input", ["$event.target.value"])
    inputChange(value: any): void {
        this.value = value;
    }
    
    @HostListener("focus", ["$event"])
    focused(event: Event): void {
        this.select.next(event);
    }
    
    @Output() select = new EventEmitter<MouseEvent>();
    @HostListener("click", ["$event"])
    selected(event: MouseEvent): void {
        this.select.next(event);
    }
    
    ngOnInit(): void {
        this.date = DateUtils.handleDateInput(this.value);
    }
}

@Component({
    selector: ".date-picker-input-group",
    template: ` 
    <div class="input-group fuel-ui-datepicker-input-group">
        <ng-content></ng-content>
        <span class="input-group-addon" (click)="select($event)"> 
            <i class="fa fa-calendar"></i>
        </span>
    </div>`
})
export class DatePickerFieldStyler {
    selectEvent = new EventEmitter<Event>();
    
    select(event: Event): void {
        this.selectEvent.next(event);
    }
}