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
var tree_node_model_1 = require('./tree-node.model');
var tree_options_model_1 = require('./tree-options.model');
var events_1 = require('../constants/events');
var _ = require('lodash');
var TreeModel = (function () {
    function TreeModel() {
        this.options = new tree_options_model_1.TreeOptions();
        this.activeNode = null;
        this.focusedNode = null;
        this.eventNames = Object.keys(events_1.TREE_EVENTS);
    }
    TreeModel.prototype.setData = function (_a) {
        var nodes = _a.nodes, options = _a.options, events = _a.events;
        if (options) {
            this.options = new tree_options_model_1.TreeOptions(options);
        }
        var treeNodeConfig = { virtual: true };
        treeNodeConfig[this.options.childrenField] = nodes;
        var virtualRoot = new tree_node_model_1.TreeNode(treeNodeConfig, null, this);
        this.roots = virtualRoot.children;
        this._initTreeNodeContentComponent();
        this._initLoadingComponent();
        this.events = events;
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onInitialized });
    };
    TreeModel.prototype.fireEvent = function (event) {
        this.events[event.eventName].next(event);
    };
    TreeModel.prototype.getFirstRoot = function () {
        return _.first(this.roots);
    };
    TreeModel.prototype.getLastRoot = function () {
        return _.last(this.roots);
    };
    Object.defineProperty(TreeModel.prototype, "isFocused", {
        get: function () {
            return TreeModel.focusedTree === this;
        },
        enumerable: true,
        configurable: true
    });
    TreeModel.prototype.setFocus = function (value) {
        TreeModel.focusedTree = value ? this : null;
    };
    Object.defineProperty(TreeModel.prototype, "treeNodeContentComponent", {
        get: function () { return this._treeNodeContentComponent; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeModel.prototype, "loadingComponent", {
        get: function () { return this._loadingComponent; },
        enumerable: true,
        configurable: true
    });
    ;
    // if treeNodeTemplate is a component - use it,
    // otherwise - it's a template, so wrap it with an AdHoc component
    TreeModel.prototype._initTreeNodeContentComponent = function () {
        this._treeNodeContentComponent = this.options.treeNodeTemplate;
        if (typeof this._treeNodeContentComponent === 'string') {
            this._treeNodeContentComponent = this._createAdHocComponent(this._treeNodeContentComponent);
        }
    };
    // same for loading component
    TreeModel.prototype._initLoadingComponent = function () {
        this._loadingComponent = this.options.loadingComponent;
        if (typeof this._loadingComponent === 'string') {
            this._loadingComponent = this._createAdHocComponent(this._loadingComponent);
        }
    };
    TreeModel.prototype._createAdHocComponent = function (templateStr) {
        var AdHocTreeNodeTemplateComponent = (function () {
            function AdHocTreeNodeTemplateComponent() {
            }
            __decorate([
                core_1.Input(), 
                __metadata('design:type', tree_node_model_1.TreeNode)
            ], AdHocTreeNodeTemplateComponent.prototype, "node", void 0);
            AdHocTreeNodeTemplateComponent = __decorate([
                core_1.Component({
                    selector: 'TreeNodeTemplate',
                    template: templateStr
                }), 
                __metadata('design:paramtypes', [])
            ], AdHocTreeNodeTemplateComponent);
            return AdHocTreeNodeTemplateComponent;
        }());
        return AdHocTreeNodeTemplateComponent;
    };
    TreeModel.prototype.focusNextNode = function () {
        var previousNode = this.focusedNode;
        var nextNode = previousNode ? previousNode.findNextNode() : this.getFirstRoot();
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.focusedNode;
        var nextNode = previousNode ? previousNode.findPreviousNode() : this.getLastRoot();
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.focusedNode;
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggle();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild() : this.getFirstRoot();
            nextNode && nextNode.focus();
        }
    };
    TreeModel.prototype.focusDrillUp = function () {
        var previousNode = this.focusedNode;
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggle();
        }
        else {
            var nextNode = previousNode.realParent;
            nextNode && nextNode.focus();
        }
    };
    TreeModel.focusedTree = null;
    TreeModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TreeModel);
    return TreeModel;
}());
exports.TreeModel = TreeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLGdDQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLG1DQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBRW5ELHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRzVCO0lBQUE7UUFFRSxZQUFPLEdBQWdCLElBQUksZ0NBQVcsRUFBRSxDQUFDO1FBQ3pDLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBYSxJQUFJLENBQUM7UUFJN0IsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQVcsQ0FBQyxDQUFDO0lBNEd4QyxDQUFDO0lBMUdDLDJCQUFPLEdBQVAsVUFBUSxFQUEwQjtZQUF4QixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsa0JBQU07UUFDOUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxJQUFJLGNBQWMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRWxDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxxQkFB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IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSVRyZWVNb2RlbCB9IGZyb20gJy4uL2RlZnMvYXBpJztcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbCBpbXBsZW1lbnRzIElUcmVlTW9kZWwge1xuICByb290czogVHJlZU5vZGVbXTtcbiAgb3B0aW9uczogVHJlZU9wdGlvbnMgPSBuZXcgVHJlZU9wdGlvbnMoKTtcbiAgYWN0aXZlTm9kZTogVHJlZU5vZGUgPSBudWxsO1xuICBmb2N1c2VkTm9kZTogVHJlZU5vZGUgPSBudWxsO1xuICBzdGF0aWMgZm9jdXNlZFRyZWUgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50czogYW55O1xuXG4gIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyhUUkVFX0VWRU5UUyk7XG5cbiAgc2V0RGF0YSh7IG5vZGVzLCBvcHRpb25zLCBldmVudHMgfSkge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgVHJlZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV0IHRyZWVOb2RlQ29uZmlnID0geyB2aXJ0dWFsOiB0cnVlIH07XG4gICAgdHJlZU5vZGVDb25maWdbdGhpcy5vcHRpb25zLmNoaWxkcmVuRmllbGRdID0gbm9kZXM7XG4gICAgY29uc3QgdmlydHVhbFJvb3QgPSBuZXcgVHJlZU5vZGUodHJlZU5vZGVDb25maWcsIG51bGwsIHRoaXMpO1xuXG4gICAgdGhpcy5yb290cyA9IHZpcnR1YWxSb290LmNoaWxkcmVuO1xuXG4gICAgdGhpcy5faW5pdFRyZWVOb2RlQ29udGVudENvbXBvbmVudCgpO1xuICAgIHRoaXMuX2luaXRMb2FkaW5nQ29tcG9uZW50KCk7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uSW5pdGlhbGl6ZWQgfSk7XG4gIH1cblxuICBmaXJlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudC5ldmVudE5hbWVdLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0Rmlyc3RSb290KCkge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMucm9vdHMpO1xuICB9XG5cbiAgZ2V0TGFzdFJvb3QoKSB7XG4gICAgcmV0dXJuIF8ubGFzdCh0aGlzLnJvb3RzKTtcbiAgfVxuXG4gIGdldCBpc0ZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIFRyZWVNb2RlbC5mb2N1c2VkVHJlZSA9PT0gdGhpcztcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgVHJlZU1vZGVsLmZvY3VzZWRUcmVlID0gdmFsdWUgPyB0aGlzIDogbnVsbDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfdHJlZU5vZGVDb250ZW50Q29tcG9uZW50OmFueTtcbiAgZ2V0IHRyZWVOb2RlQ29udGVudENvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuX3RyZWVOb2RlQ29udGVudENvbXBvbmVudCB9O1xuXG4gIHByaXZhdGUgX2xvYWRpbmdDb21wb25lbnQ6YW55O1xuICBnZXQgbG9hZGluZ0NvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuX2xvYWRpbmdDb21wb25lbnQgfTtcblxuICAvLyBpZiB0cmVlTm9kZVRlbXBsYXRlIGlzIGEgY29tcG9uZW50IC0gdXNlIGl0LFxuICAvLyBvdGhlcndpc2UgLSBpdCdzIGEgdGVtcGxhdGUsIHNvIHdyYXAgaXQgd2l0aCBhbiBBZEhvYyBjb21wb25lbnRcbiAgX2luaXRUcmVlTm9kZUNvbnRlbnRDb21wb25lbnQoKSB7XG4gICAgdGhpcy5fdHJlZU5vZGVDb250ZW50Q29tcG9uZW50ID0gdGhpcy5vcHRpb25zLnRyZWVOb2RlVGVtcGxhdGU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQgPSB0aGlzLl9jcmVhdGVBZEhvY0NvbXBvbmVudCh0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNhbWUgZm9yIGxvYWRpbmcgY29tcG9uZW50XG4gIF9pbml0TG9hZGluZ0NvbXBvbmVudCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5vcHRpb25zLmxvYWRpbmdDb21wb25lbnQ7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb2FkaW5nQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fbG9hZGluZ0NvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUFkSG9jQ29tcG9uZW50KHRoaXMuX2xvYWRpbmdDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVBZEhvY0NvbXBvbmVudCh0ZW1wbGF0ZVN0cik6IGFueSB7XG4gICAgQENvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnVHJlZU5vZGVUZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVN0clxuICAgIH0pXG4gICAgY2xhc3MgQWRIb2NUcmVlTm9kZVRlbXBsYXRlQ29tcG9uZW50IHtcbiAgICAgICAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gICAgfVxuICAgIHJldHVybiBBZEhvY1RyZWVOb2RlVGVtcGxhdGVDb21wb25lbnQ7XG4gIH1cblxuICBmb2N1c05leHROb2RlKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmZvY3VzZWROb2RlO1xuICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5maW5kTmV4dE5vZGUoKSA6IHRoaXMuZ2V0Rmlyc3RSb290KCk7XG4gICAgbmV4dE5vZGUgJiYgbmV4dE5vZGUuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzUHJldmlvdXNOb2RlKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmZvY3VzZWROb2RlO1xuICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5maW5kUHJldmlvdXNOb2RlKCkgOiB0aGlzLmdldExhc3RSb290KCk7XG4gICAgbmV4dE5vZGUgJiYgbmV4dE5vZGUuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzRHJpbGxEb3duKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmZvY3VzZWROb2RlO1xuICAgIGlmIChwcmV2aW91c05vZGUgJiYgcHJldmlvdXNOb2RlLmlzQ29sbGFwc2VkICYmIHByZXZpb3VzTm9kZS5oYXNDaGlsZHJlbikge1xuICAgICAgcHJldmlvdXNOb2RlLnRvZ2dsZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5nZXRGaXJzdENoaWxkKCkgOiB0aGlzLmdldEZpcnN0Um9vdCgpO1xuICAgICAgbmV4dE5vZGUgJiYgbmV4dE5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0RyaWxsVXAoKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMuZm9jdXNlZE5vZGU7XG4gICAgaWYgKCFwcmV2aW91c05vZGUpIHJldHVybjtcbiAgICBpZiAocHJldmlvdXNOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgIHByZXZpb3VzTm9kZS50b2dnbGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUucmVhbFBhcmVudDtcbiAgICAgIG5leHROb2RlICYmIG5leHROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=