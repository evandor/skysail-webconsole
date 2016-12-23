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
var tree_options_model_1 = require('../models/tree-options.model');
var _ = require('lodash');
var TreeComponent = (function () {
    function TreeComponent(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        treeModel.eventNames.forEach(function (name) { return _this[name] = new core_1.EventEmitter(); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (_.includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        var insideClick = $event.target.closest('Tree');
        if (!insideClick) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        this.treeModel.setData({
            options: changes.options && changes.options.currentValue,
            nodes: changes.nodes && changes.nodes.currentValue,
            events: _.pick(this, this.treeModel.eventNames)
        });
    };
    __decorate([
        core_1.ContentChild('loadingTemplate'), 
        __metadata('design:type', core_1.TemplateRef)
    ], TreeComponent.prototype, "loadingTemplate", void 0);
    __decorate([
        core_1.ContentChild('treeNodeTemplate'), 
        __metadata('design:type', core_1.TemplateRef)
    ], TreeComponent.prototype, "treeNodeTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], TreeComponent.prototype, "nodes", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tree_options_model_1.TreeOptions), 
        __metadata('design:paramtypes', [tree_options_model_1.TreeOptions])
    ], TreeComponent.prototype, "options", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], TreeComponent.prototype, "focused", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onToggleExpanded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onActiveChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onActivate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onDeactivate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onDoubleClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onContextMenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onUpdateData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onInitialized", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onMoveNode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TreeComponent.prototype, "onEvent", void 0);
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'Tree',
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(body: keydown)': "onKeydown($event)",
                '(body: mousedown)': "onMousedown($event)"
            },
            providers: [tree_model_1.TreeModel],
            styles: [
                '.tree-children { padding-left: 20px }',
                ".tree {\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none;   /* Chrome/Safari/Opera */\n      -khtml-user-select: none;    /* Konqueror */\n      -moz-user-select: none;      /* Firefox */\n      -ms-user-select: none;       /* IE/Edge */\n      user-select: none;           /* non-prefixed version, currently not supported by any browser */\n    }"
            ],
            template: "\n    <div class=\"tree\" [class.node-dragging]=\"treeModel.isDragging()\">\n      <TreeNode\n        *ngFor=\"let node of treeModel.roots; let i = index\"\n        [node]=\"node\"\n        [nodeIndex]=\"i\"\n        [loadingTemplate]=\"loadingTemplate\"\n        [treeNodeContentTemplate]=\"treeNodeTemplate\">\n      </TreeNode>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThILGVBQWUsQ0FBQyxDQUFBO0FBRTlJLDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2pELG1DQUE0Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBRzNELElBQVksQ0FBQyxXQUFNLFFBRW5CLENBQUMsQ0FGMEI7QUFtQzNCO0lBQ0UsdUJBQW1CLFNBQW1CO1FBRHhDLGlCQXlEQztRQXhEb0IsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNwQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFTUSxzQkFBSSxnQ0FBSztRQURsQixpQ0FBaUM7YUFDeEIsVUFBVSxLQUFXLElBQUksQ0FBQzs7O09BQUE7O0lBQzFCLHNCQUFJLGtDQUFPO2FBQVgsVUFBWSxPQUFtQixJQUFJLENBQUM7OztPQUFBOztJQUVwQyxzQkFBSSxrQ0FBTzthQUFYLFVBQVksS0FBYTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQWdCRCxpQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFDaEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUUxRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFDeEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ2xELE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUNoRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEREO1FBQUMsbUJBQVksQ0FBQyxpQkFBaUIsQ0FBQzs7MERBQUE7SUFDaEM7UUFBQyxtQkFBWSxDQUFDLGtCQUFrQixDQUFDOzsyREFBQTtJQUdqQztRQUFDLFlBQUssRUFBRTs7OzhDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OztnREFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOzs7Z0RBQUE7SUFJUjtRQUFDLGFBQU0sRUFBRTs7bURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MERBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7a0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7aURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7a0RBQUE7SUFoRVg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsSUFBSSxFQUFFO2dCQUNKLGlCQUFpQixFQUFFLG1CQUFtQjtnQkFDdEMsbUJBQW1CLEVBQUUscUJBQXFCO2FBQzNDO1lBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQVMsQ0FBQztZQUN0QixNQUFNLEVBQUU7Z0JBQ04sdUNBQXVDO2dCQUN2Qyx3YkFTRTthQUNIO1lBQ0QsUUFBUSxFQUFFLDRWQVVUO1NBQ0YsQ0FBQzs7cUJBQUE7SUEwREYsb0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLHFCQUFhLGdCQXlEekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElUcmVlTm9kZVRlbXBsYXRlIH0gZnJvbSAnLi90cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMva2V5cyc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUcmVlJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICcoYm9keToga2V5ZG93biknOiBcIm9uS2V5ZG93bigkZXZlbnQpXCIsXG4gICAgJyhib2R5OiBtb3VzZWRvd24pJzogXCJvbk1vdXNlZG93bigkZXZlbnQpXCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbVHJlZU1vZGVsXSxcbiAgc3R5bGVzOiBbXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4IH0nLFxuICAgIGAudHJlZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBLb25xdWVyb3IgKi9cbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgICAvKiBJRS9FZGdlICovXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgIC8qIG5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBieSBhbnkgYnJvd3NlciAqL1xuICAgIH1gXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRyZWVcIiBbY2xhc3Mubm9kZS1kcmFnZ2luZ109XCJ0cmVlTW9kZWwuaXNEcmFnZ2luZygpXCI+XG4gICAgICA8VHJlZU5vZGVcbiAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZU1vZGVsLnJvb3RzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW25vZGVdPVwibm9kZVwiXG4gICAgICAgIFtub2RlSW5kZXhdPVwiaVwiXG4gICAgICAgIFtsb2FkaW5nVGVtcGxhdGVdPVwibG9hZGluZ1RlbXBsYXRlXCJcbiAgICAgICAgW3RyZWVOb2RlQ29udGVudFRlbXBsYXRlXT1cInRyZWVOb2RlVGVtcGxhdGVcIj5cbiAgICAgIDwvVHJlZU5vZGU+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmVlTW9kZWw6VHJlZU1vZGVsKSB7XG4gICAgdHJlZU1vZGVsLmV2ZW50TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gdGhpc1tuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKSk7XG4gIH1cblxuICBfbm9kZXM6YW55W107XG4gIF9vcHRpb25zOlRyZWVPcHRpb25zO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2xvYWRpbmdUZW1wbGF0ZScpIGxvYWRpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZCgndHJlZU5vZGVUZW1wbGF0ZScpIHRyZWVOb2RlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPElUcmVlTm9kZVRlbXBsYXRlPjtcblxuICAvLyBXaWxsIGJlIGhhbmRsZWQgaW4gbmdPbkNoYW5nZXNcbiAgQElucHV0KCkgc2V0IG5vZGVzKG5vZGVzOmFueVtdKSB7IH07XG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdGlvbnM6VHJlZU9wdGlvbnMpIHsgfTtcblxuICBASW5wdXQoKSBzZXQgZm9jdXNlZCh2YWx1ZTpib29sZWFuKSB7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXModmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIG9uVG9nZ2xlO1xuICBAT3V0cHV0KCkgb25Ub2dnbGVFeHBhbmRlZDtcbiAgQE91dHB1dCgpIG9uQWN0aXZlQ2hhbmdlZDtcbiAgQE91dHB1dCgpIG9uQWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBvbkRlYWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBvbkZvY3VzO1xuICBAT3V0cHV0KCkgb25CbHVyO1xuICBAT3V0cHV0KCkgb25Eb3VibGVDbGljaztcbiAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnU7XG4gIEBPdXRwdXQoKSBvblVwZGF0ZURhdGE7XG4gIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkO1xuICBAT3V0cHV0KCkgb25Nb3ZlTm9kZTtcbiAgQE91dHB1dCgpIG9uRXZlbnQ7XG5cbiAgb25LZXlkb3duKCRldmVudCkge1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuaXNGb2N1c2VkKSByZXR1cm47XG4gICAgaWYgKF8uaW5jbHVkZXMoWydpbnB1dCcsICd0ZXh0YXJlYSddLFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpIHJldHVybjtcblxuICAgIGNvbnN0IGZvY3VzZWROb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcblxuICAgIHRoaXMudHJlZU1vZGVsLnBlcmZvcm1LZXlBY3Rpb24oZm9jdXNlZE5vZGUsICRldmVudCk7XG4gIH1cblxuICBvbk1vdXNlZG93bigkZXZlbnQpIHtcbiAgICBsZXQgaW5zaWRlQ2xpY2sgPSAkZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1RyZWUnKTtcbiAgICBpZiAoIWluc2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldERhdGEoe1xuICAgICAgb3B0aW9uczogY2hhbmdlcy5vcHRpb25zICYmIGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUsXG4gICAgICBub2RlczogY2hhbmdlcy5ub2RlcyAmJiBjaGFuZ2VzLm5vZGVzLmN1cnJlbnRWYWx1ZSxcbiAgICAgIGV2ZW50czogXy5waWNrKHRoaXMsIHRoaXMudHJlZU1vZGVsLmV2ZW50TmFtZXMpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==