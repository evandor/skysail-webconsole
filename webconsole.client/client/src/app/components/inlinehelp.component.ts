import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'inlinehelp',
  inputs: [
    'inlineHelpId:id',
    'category',
    'closeText:closeText'
  ],
  template: `
      <div *ngIf="isShown(inlineHelpId)" class="alert alert-warning alert-dismissible fade in" role="alert" style="font-size:small">
      <button type="button" class="close small" data-dismiss="alert" aria-label="Close" (click)="hidePermanently(inlineHelpId)"
        style="font-size:small"><span aria-hidden="true">&times;&nbsp;{{closeText}}</span></button>
      <ng-content></ng-content>
    </div>
  `
})
export class InlineHelp {

    identifier = 'inlineHelp_';

    id: string;
    closeText:string;
    hidePageHelpFor: string = '';

    constructor(private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.params.subscribe(params => {
            this.hidePageHelpFor = localStorage.getItem(this.identifier+this._activatedRoute.url);
            if (this.hidePageHelpFor == null) {
                this.hidePageHelpFor = '';
            }
        });
    }

    isShown(id: string):boolean {
        var str = localStorage.getItem(this.identifier+this._activatedRoute.url) as string;
        if (str == null) {
            return true;
        }
        return (str.indexOf(","+id) === -1);
    }

    hidePermanently(id: string) {
        this.hidePageHelpFor += ","+id;
        localStorage.setItem(this.identifier+this._activatedRoute.url, this.hidePageHelpFor);
    }

    showAllInlineHelp() {
        this.hidePageHelpFor = '';
        localStorage.removeItem(this.identifier+this._activatedRoute.url);
    }
}
