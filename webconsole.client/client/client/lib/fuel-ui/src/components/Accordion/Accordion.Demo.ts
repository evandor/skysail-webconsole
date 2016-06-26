import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_PROVIDERS} from '../../components/Tab/Tab';
import {ACCORDION_PROVIDERS} from '../../components/Accordion/AccordionItem';
import {CodeHighlighter} from '../../directives/CodeHighlighter/CodeHighlighter';
import {TableSortable, TableSortableColumn, TableSortableSorting} from '../../components/TableSortable/TableSortable';
import {Event, EventColumns, EventsDefaultSort, Attribute, AttributeColumns, AttributesDefaultSort} from '../../utilities/demoUtilities';

@Component({
  template: `
<div class="row">
    <div class="col-md-12">
        <div class="card card-block">
            <h2 class="card-title">Accordion</h2>
            <p class="card-text">Accordion is a custom component to display a list of collapsable items</p>
        </div>
    </div>
</div>

<section class="row m-a">
    <div>
        <p>
            <button type="button" class="btn btn-primary btn-sm"
                    (click)="lastOpen = !lastOpen">Last Items: {{lastOpen ? 'Opened' : 'Closed'}}
            </button>
            <button type="button" class="btn btn-primary btn-sm"
                    (click)="firstDisabled = ! firstDisabled">First panels: {{firstDisabled ? 'Disabled' : 'Enabled'}}
            </button>
            <button type="button" class="btn btn-primary btn-sm"
                    (click)="addAccordionItem()">Add Accordion Item
            </button>
        </p>
        
        <div class="row">
            <label for="duration" class="col-sm-2 form-control-label">Animation Duration</label>
            <div class="col-sm-2">
                <input class="form-control" [(ngModel)]="duration" step="10" type="number" name="duration">
            </div>
            <div class="checkbox col-md-3">
                <label for="oneAtATime" class="form-control-label">
                    <input [(ngModel)]="oneAtATime" name="oneAtATime" type="checkbox" /> 
                    Open only one at a time
                </label>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <h3>Without Styles</h3>
                <accordion [closeOthers]="oneAtATime" [duration]="duration">
                    <accordion-item heading="Static Header 1"
                                    [(open)]="firstOpen"
                                    [disabled]="firstDisabled">
                        This content is showing on start
                    </accordion-item>
                    <accordion-item *ngFor="let accordionItem of accordionItems" [heading]="accordionItem.heading">
                        {{ accordionItem?.content }}
                    </accordion-item>
                    <accordion-item heading="Accordion Item Body Expands">
                        <p>The body of the accordion group expands as the content grows</p>
                        <button type="button" class="btn btn-primary btn-sm" (click)="addContentItem()">Add Item</button>
                        <div *ngFor="let contentItem of contentItems">{{contentItem}}</div>
                    </accordion-item>
                    <accordion-item #item [(open)]="lastOpen">
                        <accordion-heading>
                            <a (click)="$event.preventDefault" class="fuel-ui-clickable">Markup Here!</a>
                            <i class="pull-right fa"
                                [ngClass]="{'fa-chevron-down': item?.open, 'fa-chevron-right': !item || !item.open}"></i>
                        </accordion-heading>
                        What amazing content!
                    </accordion-item>
                </accordion>
            </div>
            <div class="col-md-6">
                <h3>With Styles</h3>
                <accordion [closeOthers]="oneAtATime" [duration]="duration">
                    <div accordion-item class="fuel-ui-accordion"
                                    [(open)]="firstOpen"
                                    [disabled]="firstDisabled">
                        <div accordion-heading class="fuel-ui-accordion-heading fuel-ui-clickable" 
                                    [ngClass]="{'text-muted': firstDisabled}">
                            Static Header 1
                        </div>
                        <div class="fuel-ui-accordion-body">
                            This content is showing on start
                        </div>
                    </div>
                    <div accordion-item class="fuel-ui-accordion" *ngFor="let accordionItem of accordionItems">
                        <div accordion-heading class="fuel-ui-accordion-heading fuel-ui-clickable">
                            {{accordionItem.heading}}
                        </div>
                        <div class="fuel-ui-accordion-body">
                            {{ accordionItem?.content }}
                        </div>
                    </div>
                    <div accordion-item class="fuel-ui-accordion">
                        <div accordion-heading class="fuel-ui-accordion-heading fuel-ui-clickable">
                            Accordion Item Body Expands
                        </div>
                        <div class="fuel-ui-accordion-body">
                            <p>The body of the accordion group expands as the content grows</p>
                            <button type="button" class="btn btn-primary btn-sm" (click)="addContentItem()">Add Item</button>
                            <div *ngFor="let contentItem of contentItems">{{contentItem}}</div>
                        </div>
                    </div>
                    <div accordion-item class="fuel-ui-accordion" #itemStyled [(open)]="lastOpen">
                        <div accordion-heading class="fuel-ui-accordion-heading fuel-ui-clickable">
                            <a (click)="$event.preventDefault">Markup Here!</a>
                            <i class="pull-right fa"
                                [ngClass]="{'fa-chevron-down': itemStyled?.open, 'fa-chevron-right': !itemStyled || !itemStyled.open}"></i>
                        </div>
                        <div class="fuel-ui-accordion-body">
                            What amazing content!
                        </div>
                    </div>
                </accordion>
                <p>The class styles from the example Accordion above are added with Fuel-UI's CSS bundle, so feel free to use the HTML below!</p>
            </div>
        </div>
    </div>
</section>

<div class="source">
<h3>Import</h3>
<pre>
<code class="language-javascript" code-highlight>
import {ACCORDION_PROVIDERS} from 'fuel-ui/fuel-ui';
</code>
</pre>

<h3>Getting Started</h3>
<p>Accordion is a custom element to show a list of collapsable items. The Accordion component makes use of the Collapse directive to make a highly customizable interface.</p>

<h3>Usage</h3>
<tabset>
<tab heading="HTML - No Styles">
<pre>
<code class="language-markup" code-highlight>
&lt;accordion [closeOthers]=&quot;oneAtATime&quot; [duration]=&quot;duration&quot;&gt;
    &lt;accordion-item heading=&quot;Static Header 1&quot;
                    [(open)]=&quot;firstOpen&quot;
                    [disabled]=&quot;firstDisabled&quot;&gt;
        This content is showing on start
    &lt;/accordion-item&gt;
    &lt;accordion-item #item [(open)]=&quot;lastOpen&quot;&gt;
        &lt;accordion-heading&gt;
            &lt;a (click)=&quot;$event.preventDefault&quot; class=&quot;fuel-ui-clickable&quot;&gt;Markup Here!&lt;/a&gt;
            &lt;i class=&quot;pull-right fa&quot;
                [ngClass]=&quot;{'fa-chevron-down': item?.open, 'fa-chevron-right': !item || !item.open}&quot;&gt;&lt;/i&gt;
        &lt;/accordion-heading&gt;
        What amazing content!
    &lt;/accordion-item&gt;
&lt;/accordion&gt;
</code>
</pre>
</tab>
<tab heading="HTML - With Styles">
<pre>
<code class="language-markup" code-highlight>
&lt;accordion [closeOthers]=&quot;oneAtATime&quot; [duration]=&quot;duration&quot;&gt;
    &lt;div accordion-item class=&quot;fuel-ui-accordion&quot;
                    [(open)]=&quot;firstOpen&quot;
                    [disabled]=&quot;firstDisabled&quot;&gt;
        &lt;div accordion-heading class=&quot;fuel-ui-accordion-heading fuel-ui-clickable&quot; 
                    [ngClass]=&quot;{'text-muted': firstDisabled}&quot;&gt;
            Static Header 1
        &lt;/div&gt;
        &lt;div class=&quot;fuel-ui-accordion-body&quot;&gt;
            This content is showing on start
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div accordion-item class=&quot;fuel-ui-accordion&quot; #itemStyled [(open)]=&quot;lastOpen&quot;&gt;
        &lt;div accordion-heading class=&quot;fuel-ui-accordion-heading fuel-ui-clickable&quot;&gt;
            &lt;a (click)=&quot;$event.preventDefault&quot;&gt;Markup Here!&lt;/a&gt;
            &lt;i class=&quot;pull-right fa&quot;
                [ngClass]=&quot;{'fa-chevron-down': itemStyled?.open, 'fa-chevron-right': !itemStyled || !itemStyled.open}&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div class=&quot;fuel-ui-accordion-body&quot;&gt;
            What amazing content!
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/accordion&gt;
</code>
</pre>
</tab>
<tab heading="Sass">
<pre>
<code class="language-css" code-highlight>
/* 
 * This is added in Fuel-UI's CSS bundle already!
 * Feel free to use this as base for your own styles!
 */

.fuel-ui-accordion {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    .fuel-ui-accordion-heading {
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        color: #333;
        padding: 10px 15px;
        
        &.text-muted {
            color: #818a91 !important;
        }
    }
    
    .fuel-ui-accordion-body {
        padding: 15px;
    }
}
</code>
</pre>
</tab>
<tab heading="TypeScript">
<pre>
<code class="language-javascript" code-highlight>
export class AccordionExample {
    oneAtATime:boolean = true;
    duration:number = 250;
    firstOpen:boolean = true;
    firstDisabled:boolean = false;
    lastOpen:boolean = false;
}
</code>
</pre>
</tab>
</tabset>

<h3>Accordion Attributes</h3>
<table-sortable
    [columns]="accordionAttributesColumns"
    [data]="accordionAttributes"
    [sort]="accordionAttributesSort">
    Loading table...
</table-sortable>

<h3>Accordion Item Attributes</h3>
<table-sortable
    [columns]="accordionItemAttributesColumns"
    [data]="accordionItemAttributes"
    [sort]="accordionItemAttributesSort">
    Loading table...
</table-sortable>

</div>`,
        directives: [CORE_DIRECTIVES, ACCORDION_PROVIDERS, CodeHighlighter, TableSortable, TAB_PROVIDERS]
})
export class AccordionDemo {
    
    oneAtATime:boolean = true;
    duration:number = 250;
    firstOpen:boolean = true;
    firstDisabled:boolean = false;
    lastOpen:boolean = false;

    contentItems:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

    accordionItems:Array<any> = [
        {
            heading: 'Custom Object Header - 1',
            content: 'Custom Object Body - 1'
        },
        {
            heading: 'Custom Object Header - 2',
            content: 'Custom Object Body - 2'
        }
    ];

    addContentItem():void {
        this.contentItems.push('New Item ' + (this.contentItems.length+1));
    }
    
    addAccordionItem():void {
        this.accordionItems.push({
            heading: 'Custom Object Header - ' + (this.accordionItems.length+1),
            content: 'Custom Object Body - ' + (this.accordionItems.length+1)
        })
    }
    
    accordionAttributes:Attribute[] = [
        new Attribute('closeOthers', 'boolean', 'true', 'Only be able to have one accordion item opened at once'),
        new Attribute('duration', 'number', '250', 'Duration of the collapse animations')
    ];
    accordionAttributesColumns:TableSortableColumn[] = AttributeColumns;
    accordionAttributesSort:TableSortableSorting = AttributesDefaultSort;
    
    accordionItemAttributes:Attribute[] = [
        new Attribute('disabled', 'boolean', 'false', 'Disable accordion item from opening on click and display as greyed out'),
        new Attribute('open', 'boolean', 'false', 'The status of the accordion item showing content'),
        new Attribute('heading', 'string', 'null', 'The clickable heading of the content of your accordion item')
    ];
    accordionItemAttributesColumns:TableSortableColumn[] = AttributeColumns;
    accordionItemAttributesSort:TableSortableSorting = AttributesDefaultSort;
}

export var ACCORDION_DEMO_PROVIDERS = [
    AccordionDemo
];