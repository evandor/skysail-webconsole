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
var TreeNodeContent = (function () {
    function TreeNodeContent(treeModel, componentResolver, viewContainerRef) {
        this.treeModel = treeModel;
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
    }
    TreeNodeContent.prototype.ngAfterViewInit = function () {
        this._loadTreeNodeContent();
    };
    TreeNodeContent.prototype._loadTreeNodeContent = function () {
        var _this = this;
        this.componentResolver.resolveComponent(this.treeModel.treeNodeContentComponent)
            .then(function (componentFactory) {
            var componentRef = _this.viewContainerRef.createComponent(componentFactory, 0, _this.viewContainerRef.injector);
            componentRef.instance.node = _this.node;
            componentRef.instance.context = _this.node.context;
            componentRef.changeDetectorRef.detectChanges();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tree_node_model_1.TreeNode)
    ], TreeNodeContent.prototype, "node", void 0);
    TreeNodeContent = __decorate([
        core_1.Component({
            selector: 'TreeNodeContent',
            template: '',
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel, core_1.ComponentResolver, core_1.ViewContainerRef])
    ], TreeNodeContent);
    return TreeNodeContent;
}());
exports.TreeNodeContent = TreeNodeContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUgsZUFBZSxDQUFDLENBQUE7QUFDckksZ0NBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsMkJBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFXakQ7SUFHRSx5QkFDVSxTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsZ0JBQWtDO1FBRmxDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRTVDLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDhDQUFvQixHQUFwQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUM7YUFDN0UsSUFBSSxDQUFDLFVBQUMsZ0JBQXFEO1lBQzFELElBQUksWUFBWSxHQUNaLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWxELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2QkQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBTFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7O3VCQUFBO0lBMEJGLHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSx1QkFBZSxrQkF5QjNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb21wb25lbnRSZXNvbHZlciwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmLCBBZnRlclZpZXdJbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVRlbXBsYXRlIHtcbiAgbm9kZTogVHJlZU5vZGU7XG4gIGNvbnRleHQ6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVDb250ZW50JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmVlTW9kZWw6IFRyZWVNb2RlbCxcbiAgICBwcml2YXRlIGNvbXBvbmVudFJlc29sdmVyOiBDb21wb25lbnRSZXNvbHZlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9sb2FkVHJlZU5vZGVDb250ZW50KCk7XG4gIH1cblxuICBfbG9hZFRyZWVOb2RlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlc29sdmVyLnJlc29sdmVDb21wb25lbnQodGhpcy50cmVlTW9kZWwudHJlZU5vZGVDb250ZW50Q29tcG9uZW50KVxuICAgICAgLnRoZW4oKGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8SVRyZWVOb2RlVGVtcGxhdGU+KSA9PiB7XG4gICAgICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxJVHJlZU5vZGVUZW1wbGF0ZT5cbiAgICAgICAgICA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgMCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLmluamVjdG9yKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZXh0ID0gdGhpcy5ub2RlLmNvbnRleHQ7XG5cbiAgICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=