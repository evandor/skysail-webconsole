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
var tree_node_component_1 = require('./tree-node.component');
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
        var focusedNode = this.treeModel.getFocusedNode();
        if (this.treeModel.performKeyAction(focusedNode, $event)) {
            $event.preventDefault();
        }
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
    ], TreeComponent.prototype, "onInitialized", void 0);
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'Tree',
            directives: [tree_node_component_1.TreeNodeComponent],
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
            template: "\n    <div class=\"tree\">\n      <TreeNode\n        *ngFor=\"let node of treeModel.roots\"\n        [node]=\"node\">\n      </TreeNode>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1HLGVBQWUsQ0FBQyxDQUFBO0FBQ25ILG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWpELG1DQUE0Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBRzNELElBQVksQ0FBQyxXQUFNLFFBRW5CLENBQUMsQ0FGMEI7QUFpQzNCO0lBQ0UsdUJBQW1CLFNBQW1CO1FBRHhDLGlCQWdEQztRQS9Db0IsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNwQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFLUSxzQkFBSSxnQ0FBSztRQURsQixpQ0FBaUM7YUFDeEIsVUFBVSxLQUFXLElBQUksQ0FBQzs7O09BQUE7O0lBQzFCLHNCQUFJLGtDQUFPO2FBQVgsVUFBWSxPQUFtQixJQUFJLENBQUM7OztPQUFBOztJQUVwQyxzQkFBSSxrQ0FBTzthQUFYLFVBQVksS0FBYTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVlELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUV0QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFDeEQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ2xELE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUNoRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdkNEO1FBQUMsWUFBSyxFQUFFOzs7OENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7O2dEQUFBO0lBRVI7UUFBQyxZQUFLLEVBQUU7OztnREFBQTtJQUlSO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztxREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztrREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztpREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzt3REFBQTtJQXREWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztZQUMvQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxJQUFJLEVBQUU7Z0JBQ0osaUJBQWlCLEVBQUUsbUJBQW1CO2dCQUN0QyxtQkFBbUIsRUFBRSxxQkFBcUI7YUFDM0M7WUFDRCxTQUFTLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTix1Q0FBdUM7Z0JBQ3ZDLHdiQVNFO2FBQ0g7WUFDRCxRQUFRLEVBQUUsMEpBT1Q7U0FDRixDQUFDOztxQkFBQTtJQWlERixvQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFkscUJBQWEsZ0JBZ0R6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2tleXMnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZScsXG4gIGRpcmVjdGl2ZXM6IFtUcmVlTm9kZUNvbXBvbmVudF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnKGJvZHk6IGtleWRvd24pJzogXCJvbktleWRvd24oJGV2ZW50KVwiLFxuICAgICcoYm9keTogbW91c2Vkb3duKSc6IFwib25Nb3VzZWRvd24oJGV2ZW50KVwiXG4gIH0sXG4gIHByb3ZpZGVyczogW1RyZWVNb2RlbF0sXG4gIHN0eWxlczogW1xuICAgICcudHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweCB9JyxcbiAgICBgLnRyZWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgIC8qIENocm9tZS9TYWZhcmkvT3BlcmEgKi9cbiAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogS29ucXVlcm9yICovXG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIEZpcmVmb3ggKi9cbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgLyogSUUvRWRnZSAqL1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgICAvKiBub24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cbiAgICB9YFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0cmVlXCI+XG4gICAgICA8VHJlZU5vZGVcbiAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZU1vZGVsLnJvb3RzXCJcbiAgICAgICAgW25vZGVdPVwibm9kZVwiPlxuICAgICAgPC9UcmVlTm9kZT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRyZWVNb2RlbDpUcmVlTW9kZWwpIHtcbiAgICB0cmVlTW9kZWwuZXZlbnROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB0aGlzW25hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpKTtcbiAgfVxuXG4gIF9ub2RlczphbnlbXTtcbiAgX29wdGlvbnM6VHJlZU9wdGlvbnM7XG4gIC8vIFdpbGwgYmUgaGFuZGxlZCBpbiBuZ09uQ2hhbmdlc1xuICBASW5wdXQoKSBzZXQgbm9kZXMobm9kZXM6YW55W10pIHsgfTtcbiAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczpUcmVlT3B0aW9ucykgeyB9O1xuXG4gIEBJbnB1dCgpIHNldCBmb2N1c2VkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgb25Ub2dnbGU7XG4gIEBPdXRwdXQoKSBvbkFjdGl2ZUNoYW5nZWQ7XG4gIEBPdXRwdXQoKSBvbkFjdGl2YXRlO1xuICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlO1xuICBAT3V0cHV0KCkgb25Gb2N1cztcbiAgQE91dHB1dCgpIG9uQmx1cjtcbiAgQE91dHB1dCgpIG9uRG91YmxlQ2xpY2s7XG4gIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51O1xuICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDtcblxuICBvbktleWRvd24oJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnRyZWVNb2RlbC5pc0ZvY3VzZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGZvY3VzZWROb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICBpZiAodGhpcy50cmVlTW9kZWwucGVyZm9ybUtleUFjdGlvbihmb2N1c2VkTm9kZSwgJGV2ZW50KSkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZWRvd24oJGV2ZW50KSB7XG4gICAgbGV0IGluc2lkZUNsaWNrID0gJGV2ZW50LnRhcmdldC5jbG9zZXN0KCdUcmVlJyk7XG4gICAgaWYgKCFpbnNpZGVDbGljaykge1xuICAgICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXREYXRhKHtcbiAgICAgIG9wdGlvbnM6IGNoYW5nZXMub3B0aW9ucyAmJiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLFxuICAgICAgbm9kZXM6IGNoYW5nZXMubm9kZXMgJiYgY2hhbmdlcy5ub2Rlcy5jdXJyZW50VmFsdWUsXG4gICAgICBldmVudHM6IF8ucGljayh0aGlzLCB0aGlzLnRyZWVNb2RlbC5ldmVudE5hbWVzKVxuICAgIH0pO1xuICB9XG59XG4iXX0=