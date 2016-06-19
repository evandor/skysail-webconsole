import { Component } from '@angular/core';
import {Tabs} from './tabs';

@Component({
  selector: 'tab',
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
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  title: string;
  active = this.active || false;
  elementCount = null;
  
  constructor(tabs: Tabs){
    
   tabs.addTab(this);
    
  }
}