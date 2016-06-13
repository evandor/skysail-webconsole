import {Component, Directive, ElementRef} from 'angular2/core'

@Directive({
  selector: "[sm-dropdown]"
})
export class SMDropdown {
  constructor(el: ElementRef) {
    jQuery(el.nativeElement).dropdown();
  }
}