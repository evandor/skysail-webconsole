import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { Tab } from './tab';
// http://plnkr.co/edit/1no1sjZ9Lkv4glsUFnnU?p=preview
@Component({
    selector: 'tabs',
    templateUrl: 'app/html/tabs.template.html',
    directives: [NgFor]
})
export class Tabs {

    tabs: Tab[];

    constructor() {
        this.tabs = [];
    }

    getTitle(tab:Tab): string {
        return tab.title;
    }



    selectTab(tab: Tab) {
        /*if (tab.hasSubtabs()) {
            return;
        }*/
        _deactivateAllTabs(this.tabs);
        tab.active = true;

        function _deactivateAllTabs(tabs: Tab[]) {
            tabs.forEach((tab) => tab.active = false);
        }

    }

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}
