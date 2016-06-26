import {Component, ViewEncapsulation, provide, ChangeDetectionStrategy, enableProdMode, trigger, state, style, transition, animate} from "@angular/core";
import {CORE_DIRECTIVES, LocationStrategy, HashLocationStrategy } from "@angular/common";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {FUELUI_COMPONENT_PROVIDERS, FUELUI_DIRECTIVE_PROVIDERS, FUELUI_PIPE_PROVIDERS, CodeHighlighter, FUELUI_ANIMATION_PROVIDERS} from "./fuel-ui";
import {APP_ROUTER_PROVIDERS} from './demo.routes';

@Component({
	selector: "fuel-ui",
    template: `
    <div id="wrapper" [class.toggled]="toggled">
        <span *ngIf="toggled" class="fuel-ui-clickable fuel-ui-toggle" (click)="$event.preventDefault(); toggled = !toggled">
            <i class="fa fa-chevron-right"></i>
        </span>
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a (click)="clickNavLink()" [routerLink]="['']">
                        <img src="https://pbs.twimg.com/profile_images/572406600309018624/r2ma7PE3.png" height="40"/> 
                        <span>Fuel-UI</span>
                    </a>
                    <i class="fa fa-bars fuel-ui-clickable pull-right" (click)="$event.preventDefault(); toggled = !toggled"></i>
                </li>
                <li><a (click)="clickNavLink()" [routerLink]="['installation']">Installation</a></li>
                <accordion [closeOthers]="false" duration="500">
                    <accordion-item #animationNav [open]="false">
                        <li accordion-heading class="fuel-ui-clickable sidebar-title">
                            Animations
                            <i class="pull-right fa"
                                [ngClass]="{'fa-minus': animationNav?.open, 'fa-plus': !animationNav || !animationNav.open}"></i>
                        </li>
                        
                        <li><a (click)="clickNavLink()" [routerLink]="['animation/collapse']">Collapse</a></li>
                    </accordion-item>
                    <accordion-item #componentNav [open]="false">
                        <li accordion-heading class="fuel-ui-clickable sidebar-title">
                            Components
                            <i class="pull-right fa"
                                [ngClass]="{'fa-minus': componentNav?.open, 'fa-plus': !componentNav || !componentNav.open}"></i>
                        </li>
                        
                        <li><a (click)="clickNavLink()" [routerLink]="['component/accordion']">Accordion</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/alert']">Alert</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/carousel']">Carousel</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/datepicker']">DatePicker</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/daterangepicker']">DateRangePicker</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/dropdown']">Dropdown</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/infinitescroller']">InfiniteScroller</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/modal']">Modal</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/pagination']">Pagination</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/progress']">Progress</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/slider']">Slider</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/tab']">Tabs</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/tablesortable']">TableSortable</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/tag']">Tags</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/textexpander']">TextExpander</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['component/timepicker']">TimePicker</a></li>
                    </accordion-item>
                    <accordion-item #directiveNav [open]="false">
                        <li accordion-heading class="fuel-ui-clickable sidebar-title">
                            Directives
                            <i class="pull-right fa"
                                [ngClass]="{'fa-minus': directiveNav?.open, 'fa-plus': !directiveNav || !directiveNav.open}"></i>
                        </li>
                        
                        <li><a (click)="clickNavLink()" [routerLink]="['directive/animation']">Animation</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['directive/codehighlighter']">Code Highlighter</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['directive/tooltip']">Tooltip</a></li>
                    </accordion-item>
                    <accordion-item #pipeNav [open]="false">
                        <li accordion-heading class="fuel-ui-clickable sidebar-title">
                            Pipes
                            <i class="pull-right fa"
                                [ngClass]="{'fa-minus': pipeNav?.open, 'fa-plus': !pipeNav || !pipeNav.open}"></i>
                        </li>
                        
                        <li><a (click)="clickNavLink()" [routerLink]="['pipe/format']">Format</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['pipe/maptoiterable']">MapToIterable</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['pipe/orderby']">OrderBy</a></li>
                        <li><a (click)="clickNavLink()" [routerLink]="['pipe/range']">Range</a></li>
                    </accordion-item>
                </accordion>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>`,
    directives: [CORE_DIRECTIVES, FUELUI_COMPONENT_PROVIDERS, FUELUI_DIRECTIVE_PROVIDERS, ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.None,
    pipes: [FUELUI_PIPE_PROVIDERS],
    animations: FUELUI_ANIMATION_PROVIDERS
})
export class DemoComponent {
    toggled: boolean = false;
    
    clickNavLink(sidebar: any):void {
        if(this.toggled && document.querySelector("#sidebar-wrapper") && document.querySelector("#sidebar-wrapper").scrollTop) 
            document.querySelector("#sidebar-wrapper").scrollTop = 0;
            
        this.toggled = this.toggled ? !this.toggled : this.toggled;
    }
}

// enableProdMode();

bootstrap(DemoComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    FUELUI_COMPONENT_PROVIDERS
]).catch(err => console.error(err));
