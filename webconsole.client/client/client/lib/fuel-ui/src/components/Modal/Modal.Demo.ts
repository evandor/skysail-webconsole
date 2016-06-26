import {Component} from '@angular/core';
import {MODAL_PROVIDERS} from './Modal';
import {CodeHighlighter} from '../../directives/CodeHighlighter/CodeHighlighter';
import {TableSortable, TableSortableColumn, TableSortableSorting} from '../../components/TableSortable/TableSortable';
import {Attribute, AttributeColumns, AttributesDefaultSort} from '../../utilities/demoUtilities';
import {TAB_PROVIDERS} from '../../components/Tab/Tab';

@Component({
  template: `
<div class="row">
    <div class="col-md-12">
        <div class="card card-block">
            <h2 class="card-title">Modal</h2>
            <p class="card-text">Modal is a custom component to display a popup</p>
        </div>
    </div>
</div>

<button class="btn btn-primary" (click)="modal.showModal()">Toggle Modal</button>
<modal #modal
    modalTitle="Modal Title"
    [closeButton]="true"
    [closeOnUnfocus]="true">
    <div class="modal-body">
        <ul>
            <li>Testing 1</li>
            <li>Testing 2</li>
            <li>Testing 3</li>
        </ul>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.closeModal()">
            <i class="fa fa-chevron-left"></i> Go Back
        </button>
    </div>
</modal>

<div class="source">
<h3>Import</h3>
<pre>
<code class="language-javascript" code-highlight>
import {Modal} from 'fuel-ui/fuel-ui';
</code>
</pre>

<h3>Getting Started</h3>
<p>Modal is a custom element to create a popup</p>

<h3>Usage</h3>
<tabset>
<tab heading="HTML">
<pre>
<code class="language-markup" code-highlight>
&lt;button class=&quot;btn btn-primary&quot; (click)=&quot;modal.showModal()&quot;&gt;Toggle Modal&lt;/button&gt;
&lt;modal #modal
    modalTitle=&quot;Modal Title&quot;
    [closeButton]=&quot;true&quot;
    [closeOnUnfocus]=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-body&quot;&gt;
        &lt;ul&gt;
            &lt;li&gt;Any&lt;/li&gt;
            &lt;li&gt;Html&lt;/li&gt;
            &lt;li&gt;Here&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class=&quot;modal-footer&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; (click)=&quot;modal.closeModal()&quot;&gt;
            &lt;i class=&quot;fa fa-chevron-left&quot;&gt;&lt;/i&gt; Go Back
        &lt;/button&gt;
    &lt;/div&gt;
&lt;/modal&gt;
</code>
</pre>
</tab>
</tabset>

<h3>Attributes</h3>
<table-sortable
    [columns]="attributesColumns"
    [data]="attributes"
    [sort]="attributesSort">
    Loading table...
</table-sortable>

</div>`,
        directives: [MODAL_PROVIDERS, CodeHighlighter, TableSortable, TAB_PROVIDERS]
})
export class ModalDemo {
    closeText: string = "Cancel";
    
    attributes:any[] = [
        new Attribute('closeOnUnfocus', 'boolean', 'true', 'Closes the opened modal when the user clicks off of it'),
        new Attribute('closeButton', 'boolean', 'true', "Option to display an 'X' close button in the corner of the modal"),
        new Attribute('modalTitle', 'string', 'null', 'Text to display in modal header')
    ];
    attributesColumns:TableSortableColumn[] = AttributeColumns;
    attributesSort:TableSortableSorting = AttributesDefaultSort;
}

export var MODAL_DEMO_PROVIDERS = [
    ModalDemo
];