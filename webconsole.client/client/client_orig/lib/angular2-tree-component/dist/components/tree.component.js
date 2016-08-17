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
var keys_1 = require('../constants/keys');
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
        var focusedNode = this.treeModel.focusedNode;
        if (!this.treeModel.isFocused)
            return;
        if (_.includes([keys_1.KEYS.DOWN, keys_1.KEYS.UP, keys_1.KEYS.LEFT,
            keys_1.KEYS.RIGHT, keys_1.KEYS.ENTER, keys_1.KEYS.SPACE], $event.keyCode)) {
            $event.preventDefault();
        }
        switch ($event.keyCode) {
            case keys_1.KEYS.DOWN:
                return this.treeModel.focusNextNode();
            case keys_1.KEYS.UP:
                return this.treeModel.focusPreviousNode();
            case keys_1.KEYS.LEFT:
                return this.treeModel.focusDrillUp();
            case keys_1.KEYS.RIGHT:
                return this.treeModel.focusDrillDown();
            case keys_1.KEYS.ENTER:
            case keys_1.KEYS.SPACE:
                return focusedNode && focusedNode.toggleActivated();
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
            template: "\n    <div class=\"tree\">\n      <TreeNode\n        (click)=\"treeModel.setFocus(true)\"\n        *ngFor=\"let node of treeModel.roots\"\n        [node]=\"node\">\n      </TreeNode>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [tree_model_1.TreeModel])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1HLGVBQWUsQ0FBQyxDQUFBO0FBQ25ILG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWpELG1DQUE0Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzNELHFCQUFxQixtQkFBbUIsQ0FBQyxDQUFBO0FBRXpDLElBQVksQ0FBQyxXQUFNLFFBRW5CLENBQUMsQ0FGMEI7QUFrQzNCO0lBQ0UsdUJBQW1CLFNBQW1CO1FBRHhDLGlCQWdFQztRQS9Eb0IsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNwQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFHUSxzQkFBSSxnQ0FBSztRQURsQixpQ0FBaUM7YUFDeEIsVUFBVSxLQUFXLElBQUksQ0FBQzs7O09BQUE7O0lBQzFCLHNCQUFJLGtDQUFPO2FBQVgsVUFBWSxPQUFtQixJQUFJLENBQUM7OztPQUFBOztJQUVwQyxzQkFBSSxrQ0FBTzthQUFYLFVBQVksS0FBYTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVlELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN0QyxFQUFFLENB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U0U7YUFDSDtZQUNELFFBQVEsRUFBRSx3TUFRVDtTQUNGLENBQUM7O3FCQUFBO0lBaUVGLG9CQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSxxQkFBYSxnQkFnRXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25zdGFudHMva2V5cyc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUcmVlJyxcbiAgZGlyZWN0aXZlczogW1RyZWVOb2RlQ29tcG9uZW50XSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICcoYm9keToga2V5ZG93biknOiBcIm9uS2V5ZG93bigkZXZlbnQpXCIsXG4gICAgJyhib2R5OiBtb3VzZWRvd24pJzogXCJvbk1vdXNlZG93bigkZXZlbnQpXCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbVHJlZU1vZGVsXSxcbiAgc3R5bGVzOiBbXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4IH0nLFxuICAgIGAudHJlZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBLb25xdWVyb3IgKi9cbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgICAvKiBJRS9FZGdlICovXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgIC8qIG5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBieSBhbnkgYnJvd3NlciAqL1xuICAgIH1gXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRyZWVcIj5cbiAgICAgIDxUcmVlTm9kZVxuICAgICAgICAoY2xpY2spPVwidHJlZU1vZGVsLnNldEZvY3VzKHRydWUpXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZU1vZGVsLnJvb3RzXCJcbiAgICAgICAgW25vZGVdPVwibm9kZVwiPlxuICAgICAgPC9UcmVlTm9kZT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRyZWVNb2RlbDpUcmVlTW9kZWwpIHtcbiAgICB0cmVlTW9kZWwuZXZlbnROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB0aGlzW25hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpKTtcbiAgfVxuXG4gIC8vIFdpbGwgYmUgaGFuZGxlZCBpbiBuZ09uQ2hhbmdlc1xuICBASW5wdXQoKSBzZXQgbm9kZXMobm9kZXM6YW55W10pIHsgfTtcbiAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczpUcmVlT3B0aW9ucykgeyB9O1xuXG4gIEBJbnB1dCgpIHNldCBmb2N1c2VkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgb25Ub2dnbGU7XG4gIEBPdXRwdXQoKSBvbkFjdGl2ZUNoYW5nZWQ7XG4gIEBPdXRwdXQoKSBvbkFjdGl2YXRlO1xuICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlO1xuICBAT3V0cHV0KCkgb25Gb2N1cztcbiAgQE91dHB1dCgpIG9uQmx1cjtcbiAgQE91dHB1dCgpIG9uRG91YmxlQ2xpY2s7XG4gIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51O1xuICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDtcblxuICBvbktleWRvd24oJGV2ZW50KSB7XG4gICAgbGV0IGZvY3VzZWROb2RlID0gdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGU7XG4gICAgaWYgKCF0aGlzLnRyZWVNb2RlbC5pc0ZvY3VzZWQpIHJldHVybjtcbiAgICBpZiAoXy5pbmNsdWRlcyhbS0VZUy5ET1dOLCBLRVlTLlVQLCBLRVlTLkxFRlQsXG4gICAgICBLRVlTLlJJR0hULCBLRVlTLkVOVEVSLCBLRVlTLlNQQUNFXSwgJGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKCRldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWVMuRE9XTjpcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmZvY3VzTmV4dE5vZGUoKTtcblxuICAgICAgY2FzZSBLRVlTLlVQOlxuICAgICAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwuZm9jdXNQcmV2aW91c05vZGUoKTtcblxuICAgICAgY2FzZSBLRVlTLkxFRlQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC5mb2N1c0RyaWxsVXAoKTtcblxuICAgICAgY2FzZSBLRVlTLlJJR0hUOlxuICAgICAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwuZm9jdXNEcmlsbERvd24oKTtcblxuICAgICAgY2FzZSBLRVlTLkVOVEVSOlxuICAgICAgY2FzZSBLRVlTLlNQQUNFOlxuICAgICAgICByZXR1cm4gZm9jdXNlZE5vZGUgJiYgZm9jdXNlZE5vZGUudG9nZ2xlQWN0aXZhdGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZWRvd24oJGV2ZW50KSB7XG4gICAgbGV0IGluc2lkZUNsaWNrID0gJGV2ZW50LnRhcmdldC5jbG9zZXN0KCdUcmVlJyk7XG4gICAgaWYgKCFpbnNpZGVDbGljaykge1xuICAgICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXREYXRhKHtcbiAgICAgIG9wdGlvbnM6IGNoYW5nZXMub3B0aW9ucyAmJiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLFxuICAgICAgbm9kZXM6IGNoYW5nZXMubm9kZXMgJiYgY2hhbmdlcy5ub2Rlcy5jdXJyZW50VmFsdWUsXG4gICAgICBldmVudHM6IF8ucGljayh0aGlzLCB0aGlzLnRyZWVNb2RlbC5ldmVudE5hbWVzKVxuICAgIH0pO1xuICB9XG59XG4iXX0=