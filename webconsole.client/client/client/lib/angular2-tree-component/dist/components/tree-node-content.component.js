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
var TreeNodeContent = (function () {
    function TreeNodeContent() {
    }
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
            template: "<span *ngIf=\"!treeNodeContentTemplate\">{{ node.displayField }}</span>\n  <template [ngTemplateOutlet]=\"treeNodeContentTemplate\" [ngOutletContext]=\"{ $implicit: node }\"></template>",
        }), 
        __metadata('design:paramtypes', [])
    ], TreeNodeContent);
    return TreeNodeContent;
}());
exports.TreeNodeContent = TreeNodeContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsZ0NBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFZckQ7SUFBQTtJQUdBLENBQUM7SUFGQztRQUFDLFlBQUssRUFBRTs7aURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0VBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwyTEFDaUc7U0FDNUcsQ0FBQzs7dUJBQUE7SUFJRixzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksdUJBQWUsa0JBRzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVUZW1wbGF0ZSB7XG4gIG5vZGU6IFRyZWVOb2RlO1xuICBjb250ZXh0OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ29udGVudCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gKm5nSWY9XCIhdHJlZU5vZGVDb250ZW50VGVtcGxhdGVcIj57eyBub2RlLmRpc3BsYXlGaWVsZCB9fTwvc3Bhbj5cbiAgPHRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVOb2RlQ29udGVudFRlbXBsYXRlXCIgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC90ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQge1xuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcbiAgQElucHV0KCkgdHJlZU5vZGVDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPElUcmVlTm9kZVRlbXBsYXRlPjtcbn1cbiJdfQ==