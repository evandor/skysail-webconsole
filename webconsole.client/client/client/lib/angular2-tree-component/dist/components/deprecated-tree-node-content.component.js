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
var tree_node_model_1 = require('../models/tree-node.model');
var tree_model_1 = require('../models/tree.model');
var adhoc_component_factory_service_1 = require('./adhoc-component-factory.service');
var TreeNodeContent = (function () {
    function TreeNodeContent(treeModel, componentFactoryResolver, viewContainerRef, adHocComponentFactoryCreator) {
        this.treeModel = treeModel;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.adHocComponentFactoryCreator = adHocComponentFactoryCreator;
    }
    TreeNodeContent.prototype.ngAfterViewInit = function () {
        this._loadTreeNodeContent();
    };
    TreeNodeContent.prototype._loadTreeNodeContent = function () {
        var componentFactory;
        try {
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.treeModel.treeNodeContentComponent);
        }
        catch (error) {
            componentFactory = this.adHocComponentFactoryCreator.getFactory(this.treeModel.treeNodeContentComponent);
        }
        var componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.viewContainerRef.injector);
        componentRef.instance.node = this.node;
        componentRef.instance.context = this.node.context;
        componentRef.changeDetectorRef.detectChanges();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tree_node_model_1.TreeNode)
    ], TreeNodeContent.prototype, "node", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], TreeNodeContent.prototype, "treeNodeContentTemplate", void 0);
    TreeNodeContent = __decorate([
        core_1.Component({
            selector: 'TreeNodeContent',
            template: '',
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, adhoc_component_factory_service_1.AdHocComponentFactoryCreator])
    ], TreeNodeContent);
    return TreeNodeContent;
}());
exports.TreeNodeContent = TreeNodeContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC10cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy9kZXByZWNhdGVkLXRyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlJLGVBQWUsQ0FBQyxDQUFBO0FBRXpKLGdDQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELGdEQUE2QyxtQ0FBbUMsQ0FBQyxDQUFBO0FBV2pGO0lBSUUseUJBQ1UsU0FBb0IsRUFDcEIsd0JBQWtELEVBQ2xELGdCQUFrQyxFQUNsQyw0QkFBMEQ7UUFIMUQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQUVwRSxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw4Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLGdCQUFnQixDQUFDO1FBQ3JCLElBQUksQ0FBQztZQUNILGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDcEgsQ0FBRTtRQUFBLEtBQUssQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzRyxDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBb0IsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsSCxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWxELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBNUJEO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztvRUFBQTtJQU5WO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDOzt1QkFBQTtJQStCRixzQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksdUJBQWUsa0JBOEIzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRSZWYsIEFmdGVyVmlld0luaXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcbmltcG9ydCB7IEFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3IgfSBmcm9tICcuL2FkaG9jLWNvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVRlbXBsYXRlIHtcbiAgbm9kZTogVHJlZU5vZGU7XG4gIGNvbnRleHQ6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVDb250ZW50JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gIEBJbnB1dCgpIHRyZWVOb2RlQ29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxJVHJlZU5vZGVUZW1wbGF0ZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmVlTW9kZWw6IFRyZWVNb2RlbCxcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3I6IEFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3JcbiAgICApIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkVHJlZU5vZGVDb250ZW50KCk7XG4gIH1cblxuICBfbG9hZFRyZWVOb2RlQ29udGVudCgpIHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeTtcbiAgICB0cnkge1xuICAgICAgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudHJlZU1vZGVsLnRyZWVOb2RlQ29udGVudENvbXBvbmVudCk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuYWRIb2NDb21wb25lbnRGYWN0b3J5Q3JlYXRvci5nZXRGYWN0b3J5KHRoaXMudHJlZU1vZGVsLnRyZWVOb2RlQ29udGVudENvbXBvbmVudCk7XG4gICAgfVxuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxJVHJlZU5vZGVUZW1wbGF0ZT5cbiAgICAgID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudDxJVHJlZU5vZGVUZW1wbGF0ZT4oY29tcG9uZW50RmFjdG9yeSwgMCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yKTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uubm9kZSA9IHRoaXMubm9kZTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGV4dCA9IHRoaXMubm9kZS5jb250ZXh0O1xuXG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufSJdfQ==