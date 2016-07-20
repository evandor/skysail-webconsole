import { Component } from '@angular/core';
import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'subtab',
  inputs: [
    'title:tabTitle',
    'active'
  ],
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
      +++<ng-content></ng-content>
  `
})
export class SubTab {
  title: string;
  active = this.active || false;
  elementCount = null;

  constructor(tab: Tab) {
    tab.addSubTab(this);
  }
}