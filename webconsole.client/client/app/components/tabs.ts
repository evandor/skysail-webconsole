import { Component } from 'angular2/core';
import {NgFor} from 'angular2/common';
import { Tab } from './tab';
// http://plnkr.co/edit/1no1sjZ9Lkv4glsUFnnU?p=preview
@Component({
    selector: 'tabs',
    template: `
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
    directives: [NgFor]
})
export class Tabs {

    tabs: Tab[];

    constructor() {
        this.tabs = [];
    }
    selectTab(tab) {

        _deactivateAllTabs(this.tabs);
        tab.active = true;

        function _deactivateAllTabs(tabs: Tab[]) {
            tabs.forEach((tab) => tab.active = false);
        }

    }
    // _deactivateAllTabs(){
    //   this.tabs.forEach((tab)=>tab.active = false);
    // }

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}
