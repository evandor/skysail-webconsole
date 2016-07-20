import { Component } from '@angular/core';
import {Tabs} from './tabs';
import {SubTab} from './subtab';

@Component({
  selector: 'tab',
  inputs: [
    'title:tabTitle',
    'color:tabColor',
    'desc:tabDescription',
    'active'
  ],
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  title: string;
  color: string;
  desc: string;
  active = this.active || false;
  elementCount = null;

  subtabs: SubTab[] = [];

  constructor(tabs: Tabs) {
    tabs.addTab(this);
  }

  hasSubtabs():boolean {
    return this.subtabs.length > 0;
  }

  addSubTab(subtab: SubTab) {
    if (this.subtabs.length === 0) {
      //tab.active = true;
    }
    this.subtabs.push(subtab);
  }
}