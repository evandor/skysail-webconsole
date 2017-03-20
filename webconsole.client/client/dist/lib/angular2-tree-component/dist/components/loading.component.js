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
var LoadingComponent = (function () {
    function LoadingComponent(treeModel, componentLoader, viewContainerRef) {
        this.treeModel = treeModel;
        this.componentLoader = componentLoader;
        this.viewContainerRef = viewContainerRef;
    }
    LoadingComponent.prototype.ngAfterViewInit = function () {
        this._loadTreeNodeContent();
    };
    LoadingComponent.prototype._loadTreeNodeContent = function () {
        this.componentLoader.loadNextToLocation(this.treeModel.loadingComponent, this.viewContainerRef);
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'LoadingComponent',
            template: ''
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel, core_1.DynamicComponentLoader, core_1.ViewContainerRef])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJFLGVBQzNFLENBQUMsQ0FEeUY7QUFDMUYsMkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFNakQ7SUFDRSwwQkFBb0IsU0FBb0IsRUFDcEIsZUFBdUMsRUFDdkMsZ0JBQWtDO1FBRmxDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ3ZDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0NBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUNyRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBakJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDOzt3QkFBQTtJQWVGLHVCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3QkFBZ0IsbUJBYzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIER5bmFtaWNDb21wb25lbnRMb2FkZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTG9hZGluZ0NvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlTW9kZWw6IFRyZWVNb2RlbCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2xvYWRUcmVlTm9kZUNvbnRlbnQoKTtcbiAgfVxuXG4gIF9sb2FkVHJlZU5vZGVDb250ZW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbih0aGlzLnRyZWVNb2RlbC5sb2FkaW5nQ29tcG9uZW50LFxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgfSAgXG59XG4iXX0=