"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tree_model_1 = require('../models/tree.model');
var adhoc_component_factory_service_1 = require('./adhoc-component-factory.service');
var LoadingComponent = (function () {
    function LoadingComponent(treeModel, componentFactoryResolver, viewContainerRef, adHocComponentFactoryCreator) {
        this.treeModel = treeModel;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.adHocComponentFactoryCreator = adHocComponentFactoryCreator;
    }
    LoadingComponent.prototype.ngAfterViewInit = function () {
        this._loadTreeNodeContent();
    };
    LoadingComponent.prototype._loadTreeNodeContent = function () {
        var componentFactory;
        try {
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.treeModel.loadingComponent);
        }
        catch (error) {
            componentFactory = this.adHocComponentFactoryCreator.getFactory(this.treeModel.loadingComponent);
        }
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.changeDetectorRef.detectChanges();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], LoadingComponent.prototype, "loadingTemplate", void 0);
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'LoadingComponent',
            template: ''
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, adhoc_component_factory_service_1.AdHocComponentFactoryCreator])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL2RlcHJlY2F0ZWQtbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEySCxlQUMzSCxDQUFDLENBRHlJO0FBRTFJLDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELGdEQUE2QyxtQ0FBbUMsQ0FBQyxDQUFBO0FBTWpGO0lBR0UsMEJBQW9CLFNBQW9CLEVBQ3BCLHdCQUFrRCxFQUNsRCxnQkFBa0MsRUFDbEMsNEJBQTBEO1FBSDFELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFDOUUsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0NBQW9CLEdBQXBCO1FBQ0UsSUFBSSxnQkFBZ0IsQ0FBQztRQUNyQixJQUFJLENBQUM7WUFDSCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVHLENBQUU7UUFBQSxLQUFLLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkcsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRSxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQXJCRDtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFMVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQzs7d0JBQUE7SUF3QkYsdUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLHdCQUFnQixtQkF1QjVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5wdXQsIENvbXBvbmVudEZhY3RvcnksIFRlbXBsYXRlUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBBZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yIH0gZnJvbSAnLi9hZGhvYy1jb21wb25lbnQtZmFjdG9yeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTG9hZGluZ0NvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGxvYWRpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVNb2RlbDogVHJlZU1vZGVsLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgYWRIb2NDb21wb25lbnRGYWN0b3J5Q3JlYXRvcjogQWRIb2NDb21wb25lbnRGYWN0b3J5Q3JlYXRvcikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRUcmVlTm9kZUNvbnRlbnQoKTtcbiAgfVxuXG4gIF9sb2FkVHJlZU5vZGVDb250ZW50KCkge1xuICAgIGxldCBjb21wb25lbnRGYWN0b3J5O1xuICAgIHRyeSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy50cmVlTW9kZWwubG9hZGluZ0NvbXBvbmVudCk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuYWRIb2NDb21wb25lbnRGYWN0b3J5Q3JlYXRvci5nZXRGYWN0b3J5KHRoaXMudHJlZU1vZGVsLmxvYWRpbmdDb21wb25lbnQpO1xuICAgIH1cbiAgICBsZXQgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59Il19