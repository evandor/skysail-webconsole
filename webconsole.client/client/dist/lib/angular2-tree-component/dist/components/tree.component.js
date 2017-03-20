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
        var focusedNode = this.treeModel.getFocusedNode();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1HLGVBQWUsQ0FBQyxDQUFBO0FBQ25ILG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDJCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWpELG1DQUE0Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzNELHFCQUFxQixtQkFBbUIsQ0FBQyxDQUFBO0FBRXpDLElBQVksQ0FBQyxXQUFNLFFBRW5CLENBQUMsQ0FGMEI7QUFrQzNCO0lBQ0UsdUJBQW1CLFNBQW1CO1FBRHhDLGlCQWtFQztRQWpFb0IsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNwQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFLUSxzQkFBSSxnQ0FBSztRQURsQixpQ0FBaUM7YUFDeEIsVUFBVSxLQUFXLElBQUksQ0FBQzs7O09BQUE7O0lBQzFCLHNCQUFJLGtDQUFPO2FBQVgsVUFBWSxPQUFtQixJQUFJLENBQUM7OztPQUFBOztJQUVwQyxzQkFBSSxrQ0FBTzthQUFYLFVBQVksS0FBYTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVlELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3RDLEVB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Qyx3YkFTRTthQUNIO1lBQ0QsUUFBUSxFQUFFLHdNQVFUO1NBQ0YsQ0FBQzs7cUJBQUE7SUFtRUYsb0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLHFCQUFhLGdCQWtFekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9rZXlzJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWUnLFxuICBkaXJlY3RpdmVzOiBbVHJlZU5vZGVDb21wb25lbnRdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJyhib2R5OiBrZXlkb3duKSc6IFwib25LZXlkb3duKCRldmVudClcIixcbiAgICAnKGJvZHk6IG1vdXNlZG93biknOiBcIm9uTW91c2Vkb3duKCRldmVudClcIlxuICB9LFxuICBwcm92aWRlcnM6IFtUcmVlTW9kZWxdLFxuICBzdHlsZXM6IFtcbiAgICAnLnRyZWUtY2hpbGRyZW4geyBwYWRkaW5nLWxlZnQ6IDIwcHggfScsXG4gICAgYC50cmVlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAvKiBDaHJvbWUvU2FmYXJpL09wZXJhICovXG4gICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEtvbnF1ZXJvciAqL1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBGaXJlZm94ICovXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIC8qIElFL0VkZ2UgKi9cbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICAgLyogbm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGFueSBicm93c2VyICovXG4gICAgfWBcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidHJlZVwiPlxuICAgICAgPFRyZWVOb2RlXG4gICAgICAgIChjbGljayk9XCJ0cmVlTW9kZWwuc2V0Rm9jdXModHJ1ZSlcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlTW9kZWwucm9vdHNcIlxuICAgICAgICBbbm9kZV09XCJub2RlXCI+XG4gICAgICA8L1RyZWVOb2RlPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJlZU1vZGVsOlRyZWVNb2RlbCkge1xuICAgIHRyZWVNb2RlbC5ldmVudE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHRoaXNbbmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKCkpO1xuICB9XG5cbiAgX25vZGVzOmFueVtdO1xuICBfb3B0aW9uczpUcmVlT3B0aW9ucztcbiAgLy8gV2lsbCBiZSBoYW5kbGVkIGluIG5nT25DaGFuZ2VzXG4gIEBJbnB1dCgpIHNldCBub2Rlcyhub2RlczphbnlbXSkgeyB9O1xuICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRpb25zOlRyZWVPcHRpb25zKSB7IH07XG5cbiAgQElucHV0KCkgc2V0IGZvY3VzZWQodmFsdWU6Ym9vbGVhbikge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBvblRvZ2dsZTtcbiAgQE91dHB1dCgpIG9uQWN0aXZlQ2hhbmdlZDtcbiAgQE91dHB1dCgpIG9uQWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBvbkRlYWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBvbkZvY3VzO1xuICBAT3V0cHV0KCkgb25CbHVyO1xuICBAT3V0cHV0KCkgb25Eb3VibGVDbGljaztcbiAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnU7XG4gIEBPdXRwdXQoKSBvbkluaXRpYWxpemVkO1xuXG4gIG9uS2V5ZG93bigkZXZlbnQpIHtcbiAgICBsZXQgZm9jdXNlZE5vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuaXNGb2N1c2VkKSByZXR1cm47XG4gICAgaWYgKF8uaW5jbHVkZXMoW0tFWVMuRE9XTiwgS0VZUy5VUCwgS0VZUy5MRUZULFxuICAgICAgS0VZUy5SSUdIVCwgS0VZUy5FTlRFUiwgS0VZUy5TUEFDRV0sICRldmVudC5rZXlDb2RlKSkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICgkZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBLRVlTLkRPV046XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC5mb2N1c05leHROb2RlKCk7XG5cbiAgICAgIGNhc2UgS0VZUy5VUDpcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmZvY3VzUHJldmlvdXNOb2RlKCk7XG5cbiAgICAgIGNhc2UgS0VZUy5MRUZUOlxuICAgICAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwuZm9jdXNEcmlsbFVwKCk7XG5cbiAgICAgIGNhc2UgS0VZUy5SSUdIVDpcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmZvY3VzRHJpbGxEb3duKCk7XG5cbiAgICAgIGNhc2UgS0VZUy5FTlRFUjpcbiAgICAgIGNhc2UgS0VZUy5TUEFDRTpcbiAgICAgICAgcmV0dXJuIGZvY3VzZWROb2RlICYmIGZvY3VzZWROb2RlLnRvZ2dsZUFjdGl2YXRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2Vkb3duKCRldmVudCkge1xuICAgIGxldCBpbnNpZGVDbGljayA9ICRldmVudC50YXJnZXQuY2xvc2VzdCgnVHJlZScpO1xuICAgIGlmICghaW5zaWRlQ2xpY2spIHtcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0RGF0YSh7XG4gICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcbiAgICAgIG5vZGVzOiBjaGFuZ2VzLm5vZGVzICYmIGNoYW5nZXMubm9kZXMuY3VycmVudFZhbHVlLFxuICAgICAgZXZlbnRzOiBfLnBpY2sodGhpcywgdGhpcy50cmVlTW9kZWwuZXZlbnROYW1lcylcbiAgICB9KTtcbiAgfVxufVxuIl19