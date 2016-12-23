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
var TreeNodeDropSlot = (function () {
    function TreeNodeDropSlot() {
    }
    TreeNodeDropSlot.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.node.treeModel.setDropLocation({ component: this, node: this.node, index: this.dropIndex });
    };
    TreeNodeDropSlot.prototype.onDragLeave = function () {
        if (this.node.treeModel.isDraggingOver(this)) {
            this.node.treeModel.setDropLocation(null);
        }
    };
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.node.mouseAction('drop', $event, { node: this.node, index: this.dropIndex });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tree_node_model_1.TreeNode)
    ], TreeNodeDropSlot.prototype, "node", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TreeNodeDropSlot.prototype, "dropIndex", void 0);
    TreeNodeDropSlot = __decorate([
        core_1.Component({
            selector: 'TreeNodeDropSlot',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                '.node-drop-slot { display: block; height: 2px; width: 100%}',
                '.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }'
            ],
            template: "\n    <div\n      class=\"node-drop-slot\"\n      [class.is-dragging-over]=\"node.treeModel.isDraggingOver(this)\"\n      (drop)=\"onDrop($event)\"\n      (dragover)=\"onDragOver($event)\"\n      (dragleave)=\"onDragLeave()\"\n      >\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TreeNodeDropSlot);
    return TreeNodeDropSlot;
}());
exports.TreeNodeDropSlot = TreeNodeDropSlot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLW5vZGUtZHJvcC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9ELGVBQWUsQ0FBQyxDQUFBO0FBQ3BFLGdDQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBb0JyRDtJQUFBO0lBbUJBLENBQUM7SUFmQyxxQ0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNmLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE1BQU07UUFDWCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBakJEO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQXBCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRTtnQkFDTiw2REFBNkQ7Z0JBQzdELGtHQUFrRzthQUNuRztZQUNELFFBQVEsRUFBRSw0UEFTVDtTQUNGLENBQUM7O3dCQUFBO0lBb0JGLHVCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSx3QkFBZ0IsbUJBbUI1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlRHJvcFNsb3QnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtcbiAgICAnLm5vZGUtZHJvcC1zbG90IHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMnB4OyB3aWR0aDogMTAwJX0nLFxuICAgICcubm9kZS1kcm9wLXNsb3QuaXMtZHJhZ2dpbmctb3ZlciB7IGJhY2tncm91bmQ6ICNkZGZmZWU7IGhlaWdodDogMjBweDsgYm9yZGVyOiAycHggZG90dGVkICM4ODg7IH0nXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJub2RlLWRyb3Atc2xvdFwiXG4gICAgICBbY2xhc3MuaXMtZHJhZ2dpbmctb3Zlcl09XCJub2RlLnRyZWVNb2RlbC5pc0RyYWdnaW5nT3Zlcih0aGlzKVwiXG4gICAgICAoZHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiXG4gICAgICAoZHJhZ292ZXIpPVwib25EcmFnT3ZlcigkZXZlbnQpXCJcbiAgICAgIChkcmFnbGVhdmUpPVwib25EcmFnTGVhdmUoKVwiXG4gICAgICA+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVEcm9wU2xvdCB7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuICBASW5wdXQoKSBkcm9wSW5kZXg6IG51bWJlcjtcblxuICBvbkRyYWdPdmVyKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMubm9kZS50cmVlTW9kZWwuc2V0RHJvcExvY2F0aW9uKHsgY29tcG9uZW50OiB0aGlzLCBub2RlOiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9KTtcbiAgfVxuXG4gIG9uRHJhZ0xlYXZlKCkge1xuICAgIGlmICh0aGlzLm5vZGUudHJlZU1vZGVsLmlzRHJhZ2dpbmdPdmVyKHRoaXMpKSB7XG4gICAgICB0aGlzLm5vZGUudHJlZU1vZGVsLnNldERyb3BMb2NhdGlvbihudWxsKTtcbiAgICB9XG4gIH1cblxuICBvbkRyb3AoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5ub2RlLm1vdXNlQWN0aW9uKCdkcm9wJywgJGV2ZW50LCB7IG5vZGU6IHRoaXMubm9kZSwgaW5kZXg6IHRoaXMuZHJvcEluZGV4IH0pO1xuICB9XG59XG4iXX0=