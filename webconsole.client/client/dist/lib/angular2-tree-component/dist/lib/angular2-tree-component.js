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
var common_1 = require('@angular/common');
var tree_options_model_1 = require('./models/tree-options.model');
exports.TREE_ACTIONS = tree_options_model_1.TREE_ACTIONS;
var keys_1 = require('./constants/keys');
exports.KEYS = keys_1.KEYS;
var tree_model_1 = require('./models/tree.model');
exports.TreeModel = tree_model_1.TreeModel;
var tree_node_model_1 = require('./models/tree-node.model');
exports.TreeNode = tree_node_model_1.TreeNode;
var loading_component_1 = require('./components/loading.component');
exports.LoadingComponent = loading_component_1.LoadingComponent;
var deprecated_loading_component_1 = require('./components/deprecated-loading.component');
var tree_component_1 = require('./components/tree.component');
exports.TreeComponent = tree_component_1.TreeComponent;
var tree_node_component_1 = require('./components/tree-node.component');
exports.TreeNodeComponent = tree_node_component_1.TreeNodeComponent;
var tree_node_content_component_1 = require('./components/tree-node-content.component');
exports.TreeNodeContent = tree_node_content_component_1.TreeNodeContent;
var deprecated_tree_node_content_component_1 = require('./components/deprecated-tree-node-content.component');
var tree_node_drop_slot_component_1 = require('./components/tree-node-drop-slot.component');
exports.TreeNodeDropSlot = tree_node_drop_slot_component_1.TreeNodeDropSlot;
var adhoc_component_factory_service_1 = require('./components/adhoc-component-factory.service');
require('./polyfills');
var deprecated_1 = require('./deprecated');
var DeprecatedTreeModule = (function () {
    function DeprecatedTreeModule() {
        deprecated_1.deprecated('DeprecatedTreeModule', 'TreeModule for AoT compilation');
    }
    DeprecatedTreeModule = __decorate([
        core_1.NgModule({
            declarations: [
                deprecated_loading_component_1.LoadingComponent,
                tree_component_1.TreeComponent,
                tree_node_component_1.TreeNodeComponent,
                deprecated_tree_node_content_component_1.TreeNodeContent,
                tree_node_drop_slot_component_1.TreeNodeDropSlot
            ],
            exports: [
                tree_component_1.TreeComponent,
            ],
            imports: [
                common_1.CommonModule,
            ],
            providers: [
                adhoc_component_factory_service_1.AdHocComponentFactoryCreator,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DeprecatedTreeModule);
    return DeprecatedTreeModule;
}());
exports.DeprecatedTreeModule = DeprecatedTreeModule;
var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        core_1.NgModule({
            declarations: [
                loading_component_1.LoadingComponent,
                tree_component_1.TreeComponent,
                tree_node_component_1.TreeNodeComponent,
                tree_node_content_component_1.TreeNodeContent,
                tree_node_drop_slot_component_1.TreeNodeDropSlot
            ],
            exports: [
                tree_component_1.TreeComponent,
            ],
            imports: [
                common_1.CommonModule,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TreeModule);
    return TreeModule;
}());
exports.TreeModule = TreeModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TreeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItdHJlZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvYW5ndWxhcjItdHJlZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxtQ0FBNkQsNkJBQTZCLENBQUMsQ0FBQTtBQXFCekYsb0JBQVk7QUFuQmQscUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFvQnRDLFlBQUk7QUFuQk4sMkJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFlOUMsaUJBQVM7QUFkWCxnQ0FBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQWVsRCxnQkFBUTtBQWRWLGtDQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBb0JoRSx3QkFBZ0I7QUFuQmxCLDZDQUErRCwyQ0FBMkMsQ0FBQyxDQUFBO0FBQzNHLCtCQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBbUIxRCxxQkFBYTtBQWxCZixvQ0FBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQW1CbkUseUJBQWlCO0FBbEJuQiw0Q0FBZ0MsMENBQTBDLENBQUMsQ0FBQTtBQW1CekUsdUJBQWU7QUFsQmpCLHVEQUE2RCxxREFBcUQsQ0FBQyxDQUFBO0FBQ25ILDhDQUFpQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBa0I1RSx3QkFBZ0I7QUFqQmxCLGdEQUE2Qyw4Q0FBOEMsQ0FBQyxDQUFBO0FBRTVGLFFBQU8sYUFBYSxDQUFDLENBQUE7QUFDckIsMkJBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBbUMxQztJQUNFO1FBQ0UsdUJBQVUsQ0FBQyxzQkFBc0IsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFyQkg7UUFBQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osK0NBQTBCO2dCQUMxQiw4QkFBYTtnQkFDYix1Q0FBaUI7Z0JBQ2pCLHdEQUF5QjtnQkFDekIsZ0RBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDhCQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCw4REFBNEI7YUFDN0I7U0FDRixDQUFDOzs0QkFBQTtJQUtGLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSw0QkFBb0IsdUJBSWhDLENBQUE7QUFnQkQ7SUFBQTtJQUF5QixDQUFDO0lBZjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLG9DQUFnQjtnQkFDaEIsOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQiw2Q0FBZTtnQkFDZixnREFBZ0I7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsOEJBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxxQkFBWTthQUNiO1NBQ0YsQ0FBQzs7a0JBQUE7SUFDdUIsaUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsa0JBQVUsYUFBRyxDQUFBO0FBQzFCO2tCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRSRUVfQUNUSU9OUywgSUFjdGlvbk1hcHBpbmcsIElBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IElUcmVlT3B0aW9ucyB9IGZyb20gJy4vZGVmcy9hcGknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgYXMgRGVwcmVjYXRlZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVwcmVjYXRlZC1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNvbnRlbnQgYXMgRGVwcmVjYXRlZFRyZWVOb2RlQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZXByZWNhdGVkLXRyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRob2MtY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZSc7XG5cbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgZGVwcmVjYXRlZCB9IGZyb20gJy4vZGVwcmVjYXRlZCc7XG5cbmV4cG9ydCB7XG4gIFRyZWVNb2RlbCxcbiAgVHJlZU5vZGUsXG4gIElUcmVlT3B0aW9ucyxcbiAgVFJFRV9BQ1RJT05TLFxuICBLRVlTLFxuICBJQWN0aW9uTWFwcGluZyxcbiAgSUFjdGlvbkhhbmRsZXIsXG4gIExvYWRpbmdDb21wb25lbnQsXG4gIFRyZWVDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29tcG9uZW50LFxuICBUcmVlTm9kZUNvbnRlbnQsXG4gIFRyZWVOb2RlRHJvcFNsb3Rcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERlcHJlY2F0ZWRMb2FkaW5nQ29tcG9uZW50LFxuICAgIFRyZWVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXG4gICAgRGVwcmVjYXRlZFRyZWVOb2RlQ29udGVudCxcbiAgICBUcmVlTm9kZURyb3BTbG90XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEZXByZWNhdGVkVHJlZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0ZWQoJ0RlcHJlY2F0ZWRUcmVlTW9kdWxlJywgJ1RyZWVNb2R1bGUgZm9yIEFvVCBjb21waWxhdGlvbicpO1xuICB9XG59XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgIFRyZWVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb250ZW50LFxuICAgIFRyZWVOb2RlRHJvcFNsb3RcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge31cbmV4cG9ydCBkZWZhdWx0IFRyZWVNb2R1bGU7XG4iXX0=