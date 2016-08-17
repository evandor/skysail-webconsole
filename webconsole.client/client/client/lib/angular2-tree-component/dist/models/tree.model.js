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
var deprecated_1 = require('./deprecated');
var _ = require('lodash');
var TreeModel = (function () {
    function TreeModel() {
        this.options = new tree_options_model_1.TreeOptions();
        this.expandedNodeIds = {};
        this.activeNodeIds = {};
        this._focusedNode = null;
        this.focusedNodeId = null;
        this.firstUpdate = true;
        this.eventNames = Object.keys(events_1.TREE_EVENTS);
    }
    TreeModel.prototype.setData = function (_a) {
        var nodes = _a.nodes, _b = _a.options, options = _b === void 0 ? null : _b, _c = _a.events, events = _c === void 0 ? null : _c;
        if (options) {
            this.options = new tree_options_model_1.TreeOptions(options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    };
    TreeModel.prototype.update = function () {
        // Rebuild tree:
        var treeNodeConfig = { virtual: true };
        treeNodeConfig[this.options.childrenField] = this.nodes;
        this.virtualRoot = this.getTreeNode(treeNodeConfig, null);
        this.roots = this.virtualRoot.children;
        this._initTreeNodeContentComponent();
        this._initLoadingComponent();
        // Fire event:
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onUpdateData });
        if (this.firstUpdate) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onInitialized });
            this.firstUpdate = false;
            this._calculateExpandedNodes();
        }
        this._loadState();
    };
    TreeModel.prototype._calculateExpandedNodes = function (startNode) {
        var _this = this;
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds[startNode.id] = true;
        }
        if (startNode.children) {
            startNode.children.forEach(function (child) { return _this._calculateExpandedNodes(child); });
        }
    };
    TreeModel.prototype.fireEvent = function (event) {
        this.events[event.eventName].next(event);
    };
    Object.defineProperty(TreeModel.prototype, "focusedNode", {
        get: function () { deprecated_1.deprecated('focusedNode attribute', 'getFocusedNode'); return this.getFocusedNode(); },
        set: function (value) { deprecated_1.deprecated('focusedNode = ', 'setFocusedNode'); this.setFocusedNode(value); },
        enumerable: true,
        configurable: true
    });
    ;
    TreeModel.prototype.getFocusedNode = function () {
        return this._focusedNode;
    };
    TreeModel.prototype.setFocusedNode = function (node) {
        this._focusedNode = node;
        this.focusedNodeId = node ? node.id : null;
    };
    TreeModel.prototype.getActiveNode = function () {
        return this.activeNodes[0];
    };
    TreeModel.prototype.getActiveNodes = function () {
        return this.activeNodes;
    };
    TreeModel.prototype.getTreeNode = function (node, parent) {
        return new tree_node_model_1.TreeNode(node, parent, this);
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
    TreeModel.prototype.isNodeFocused = function (node) {
        return this._focusedNode === node;
    };
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
    TreeModel.prototype._loadState = function () {
        var _this = this;
        if (this.focusedNodeId) {
            this._focusedNode = this.getNodeById(this.focusedNodeId);
        }
        this.expandedNodes = Object.keys(this.expandedNodeIds)
            .filter(function (id) { return _this.expandedNodeIds[id]; })
            .map(function (id) { return _this.getNodeById(id); });
        this.activeNodes = Object.keys(this.activeNodeIds)
            .filter(function (id) { return _this.expandedNodeIds[id]; })
            .map(function (id) { return _this.getNodeById(id); });
    };
    TreeModel.prototype.getNodeByPath = function (path, startNode) {
        if (startNode === void 0) { startNode = null; }
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        var childId = path.shift();
        var childNode = _.find(startNode.children, (_a = {}, _a[this.options.idField] = childId, _a));
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
        var _a;
    };
    TreeModel.prototype.getNodeById = function (id) {
        return this.getNodeBy({ id: id });
    };
    TreeModel.prototype.getNodeBy = function (predicate, startNode) {
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        var found = _.find(startNode.children, predicate);
        if (found) {
            return found;
        }
        else {
            for (var _i = 0, _a = startNode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var found_1 = this.getNodeBy(predicate, child);
                if (found_1)
                    return found_1;
            }
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
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findNextNode() : this.getFirstRoot();
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findPreviousNode() : this.getLastRoot();
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild() : this.getFirstRoot();
            nextNode && nextNode.focus();
        }
    };
    TreeModel.prototype.focusDrillUp = function () {
        var previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode.realParent;
            nextNode && nextNode.focus();
        }
    };
    TreeModel.prototype.isActive = function (node) {
        return this.activeNodeIds[node.id];
    };
    TreeModel.prototype.setActiveNode = function (node, value, multi) {
        if (multi === void 0) { multi = false; }
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
    };
    TreeModel.prototype._setActiveNodeSingle = function (node, value) {
        this.activeNodeIds = {};
        this.activeNodes = [];
        if (value) {
            this.activeNodes.push(node);
            this.activeNodeIds[node.id] = true;
        }
    };
    TreeModel.prototype._setActiveNodeMulti = function (node, value) {
        this.activeNodeIds[node.id] = value;
        if (value) {
            if (!_.includes(this.activeNodes, node)) {
                this.activeNodes.push(node);
            }
        }
        else {
            if (_.includes(this.activeNodes, node)) {
                _.remove(this.activeNodes, node);
            }
        }
    };
    TreeModel.prototype.isExpanded = function (node) {
        return this.expandedNodeIds[node.id];
    };
    TreeModel.prototype.setExpandedNode = function (node, value) {
        var index = _.indexOf(this.expandedNodes, node);
        if (value && !index)
            this.expandedNodes.push(node);
        else if (index)
            _.pullAt(this.expandedNodes, index);
        this.expandedNodeIds[node.id] = value;
    };
    TreeModel.prototype.performKeyAction = function (node, $event) {
        var action = this.options.actionMapping.keys[$event.keyCode];
        if (action) {
            action(this, node, $event);
            return true;
        }
        else {
            return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLGdDQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLG1DQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBRW5ELHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELDJCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUc1QjtJQUFBO1FBRUUsWUFBTyxHQUFnQixJQUFJLGdDQUFXLEVBQUUsQ0FBQztRQUV6QyxvQkFBZSxHQUE2QixFQUFFLENBQUM7UUFFL0Msa0JBQWEsR0FBNkIsRUFBRSxDQUFDO1FBRTdDLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBSTdCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFXLENBQUMsQ0FBQztJQW9SeEMsQ0FBQztJQWxSQywyQkFBTyxHQUFQLFVBQVEsRUFBd0M7WUFBdEMsZ0JBQUssRUFBRSxlQUFjLEVBQWQsbUNBQWMsRUFBRSxjQUFhLEVBQWIsa0NBQWE7UUFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQ0UsZ0JBQWdCO1FBQ2hCLElBQUksY0FBYyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLGNBQWM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLG9CQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLG9CQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQ0FBdUIsR0FBdkIsVUFBd0IsU0FBZ0I7UUFBeEMsaUJBU0M7UUFUdUIseUJBQWdCLEdBQWhCLGdCQUFnQjtRQUN0QyxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFMUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0JBQUksa0NBQVc7YUFBZixjQUFvQix1QkFBVSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxRyxVQUFnQixLQUFLLElBQUksdUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQURLOztJQUcxRyxrQ0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELGtDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLElBQVEsRUFBRSxNQUFlO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLDBCQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQUksZ0NBQVM7YUFBYjtZQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELGlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFJRCxzQkFBSSwrQ0FBd0I7YUFBNUIsY0FBaUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQSxDQUFDLENBQUM7OztPQUFBOztJQUd4RSxzQkFBSSx1Q0FBZ0I7YUFBcEIsY0FBeUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxDQUFDLENBQUM7OztPQUFBOztJQUV4RCwrQ0FBK0M7SUFDL0Msa0VBQWtFO0lBQ2xFLGlEQUE2QixHQUE3QjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM5RixDQUFDO0lBQ0gsQ0FBQztJQUVELDZCQUE2QjtJQUM3Qix5Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQUEsaUJBWUM7UUFYQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUNuRCxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtRQUVwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMvQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLElBQUksRUFBRSxTQUFjO1FBQWQseUJBQWMsR0FBZCxnQkFBYztRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFdkIsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUV4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRXJDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUUsT0FBTyxLQUFFLENBQUMsQ0FBQztRQUVsRixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBOztJQUM1QyxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEVBQUU7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLFNBQVMsRUFBRSxTQUFnQjtRQUFoQix5QkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ25DLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRXJDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQyxDQUFjLFVBQWtCLEVBQWxCLEtBQUEsU0FBUyxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsQ0FBQztnQkFBaEMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1osSUFBTSxPQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLE9BQUssQ0FBQztvQkFBQyxNQUFNLENBQUMsT0FBSyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBcUIsR0FBckIsVUFBc0IsV0FBVztRQUsvQjtZQUFBO1lBRUEsQ0FBQztZQURHO2dCQUFDLFlBQUssRUFBRTs7d0VBQUE7WUFMWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxXQUFXO2lCQUN4QixDQUFDOzs4Q0FBQTtZQUdGLHFDQUFDO1FBQUQsQ0FBQyxBQUZELElBRUM7UUFDRCxNQUFNLENBQUMsOEJBQThCLENBQUM7SUFDeEMsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEYsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pDLElBQUksUUFBUSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkYsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN6RSxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDakYsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7WUFDdkMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFhO1FBQWIscUJBQWEsR0FBYixhQUFhO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBb0IsR0FBcEIsVUFBcUIsSUFBSSxFQUFFLEtBQUs7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixJQUFJLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixJQUFJLEVBQUUsS0FBSztRQUN6QixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFnQixHQUFoQixVQUFpQixJQUFJLEVBQUUsTUFBTTtRQUMzQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzlELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBeFJNLHFCQUFXLEdBQUcsSUFBSSxDQUFDO0lBWDVCO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUFvU2IsZ0JBQUM7QUFBRCxDQUFDLEFBblNELElBbVNDO0FBblNZLGlCQUFTLFlBbVNyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSVRyZWVNb2RlbCB9IGZyb20gJy4uL2RlZnMvYXBpJztcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5cbmltcG9ydCB7IGRlcHJlY2F0ZWQgfSBmcm9tICcuL2RlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlTW9kZWwgaW1wbGVtZW50cyBJVHJlZU1vZGVsIHtcbiAgcm9vdHM6IFRyZWVOb2RlW107XG4gIG9wdGlvbnM6IFRyZWVPcHRpb25zID0gbmV3IFRyZWVPcHRpb25zKCk7XG4gIG5vZGVzOiBhbnlbXTtcbiAgZXhwYW5kZWROb2RlSWRzOiB7IFtpZDpzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgZXhwYW5kZWROb2RlczogVHJlZU5vZGVbXTtcbiAgYWN0aXZlTm9kZUlkczogeyBbaWQ6c3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIGFjdGl2ZU5vZGVzOiBUcmVlTm9kZVtdO1xuICBfZm9jdXNlZE5vZGU6IFRyZWVOb2RlID0gbnVsbDtcbiAgZm9jdXNlZE5vZGVJZDogc3RyaW5nID0gbnVsbDtcbiAgc3RhdGljIGZvY3VzZWRUcmVlID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudHM6IGFueTtcbiAgdmlydHVhbFJvb3Q6IFRyZWVOb2RlO1xuICBmaXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgZXZlbnROYW1lcyA9IE9iamVjdC5rZXlzKFRSRUVfRVZFTlRTKTtcblxuICBzZXREYXRhKHsgbm9kZXMsIG9wdGlvbnMgPSBudWxsLCBldmVudHMgPSBudWxsIH0pIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV3IFRyZWVPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB9XG4gICAgaWYgKG5vZGVzKSB7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBSZWJ1aWxkIHRyZWU6XG4gICAgbGV0IHRyZWVOb2RlQ29uZmlnID0geyB2aXJ0dWFsOiB0cnVlIH07XG4gICAgdHJlZU5vZGVDb25maWdbdGhpcy5vcHRpb25zLmNoaWxkcmVuRmllbGRdID0gdGhpcy5ub2RlcztcblxuICAgIHRoaXMudmlydHVhbFJvb3QgPSB0aGlzLmdldFRyZWVOb2RlKHRyZWVOb2RlQ29uZmlnLCBudWxsKTtcblxuICAgIHRoaXMucm9vdHMgPSB0aGlzLnZpcnR1YWxSb290LmNoaWxkcmVuO1xuXG4gICAgdGhpcy5faW5pdFRyZWVOb2RlQ29udGVudENvbXBvbmVudCgpO1xuICAgIHRoaXMuX2luaXRMb2FkaW5nQ29tcG9uZW50KCk7XG5cbiAgICAvLyBGaXJlIGV2ZW50OlxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vblVwZGF0ZURhdGEgfSk7XG4gICAgaWYgKHRoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkluaXRpYWxpemVkIH0pO1xuICAgICAgdGhpcy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FsY3VsYXRlRXhwYW5kZWROb2RlcygpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvYWRTdGF0ZSgpO1xuICB9XG5cbiAgX2NhbGN1bGF0ZUV4cGFuZGVkTm9kZXMoc3RhcnROb2RlID0gbnVsbCkge1xuICAgIHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZSB8fCB0aGlzLnZpcnR1YWxSb290O1xuICAgIFxuICAgIGlmIChzdGFydE5vZGUuZGF0YVt0aGlzLm9wdGlvbnMuaXNFeHBhbmRlZEZpZWxkXSkge1xuICAgICAgdGhpcy5leHBhbmRlZE5vZGVJZHNbc3RhcnROb2RlLmlkXSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGFydE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHN0YXJ0Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy5fY2FsY3VsYXRlRXhwYW5kZWROb2RlcyhjaGlsZCkpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVFdmVudChldmVudCkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50LmV2ZW50TmFtZV0ubmV4dChldmVudCk7XG4gIH1cblxuICBnZXQgZm9jdXNlZE5vZGUoKSB7IGRlcHJlY2F0ZWQoJ2ZvY3VzZWROb2RlIGF0dHJpYnV0ZScsICdnZXRGb2N1c2VkTm9kZScpOyByZXR1cm4gdGhpcy5nZXRGb2N1c2VkTm9kZSgpOyB9XG4gIHNldCBmb2N1c2VkTm9kZSh2YWx1ZSkgeyBkZXByZWNhdGVkKCdmb2N1c2VkTm9kZSA9ICcsICdzZXRGb2N1c2VkTm9kZScpOyB0aGlzLnNldEZvY3VzZWROb2RlKHZhbHVlKSB9O1xuXG4gIGdldEZvY3VzZWROb2RlKCk6VHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkTm9kZTtcbiAgfVxuXG4gIHNldEZvY3VzZWROb2RlKG5vZGUpIHtcbiAgICB0aGlzLl9mb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgdGhpcy5mb2N1c2VkTm9kZUlkID0gbm9kZSA/IG5vZGUuaWQgOiBudWxsO1xuICB9XG5cbiAgZ2V0QWN0aXZlTm9kZSgpOlRyZWVOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVOb2Rlc1swXTtcbiAgfVxuXG4gIGdldEFjdGl2ZU5vZGVzKCk6VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTm9kZXM7XG4gIH1cblxuICBnZXRUcmVlTm9kZShub2RlOmFueSwgcGFyZW50OlRyZWVOb2RlKTpUcmVlTm9kZSB7XG4gICAgcmV0dXJuIG5ldyBUcmVlTm9kZShub2RlLCBwYXJlbnQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0Rmlyc3RSb290KCkge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMucm9vdHMpO1xuICB9XG5cbiAgZ2V0TGFzdFJvb3QoKSB7XG4gICAgcmV0dXJuIF8ubGFzdCh0aGlzLnJvb3RzKTtcbiAgfVxuXG4gIGdldCBpc0ZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIFRyZWVNb2RlbC5mb2N1c2VkVHJlZSA9PT0gdGhpcztcbiAgfVxuXG4gIGlzTm9kZUZvY3VzZWQobm9kZSkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkTm9kZSA9PT0gbm9kZTtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgVHJlZU1vZGVsLmZvY3VzZWRUcmVlID0gdmFsdWUgPyB0aGlzIDogbnVsbDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfdHJlZU5vZGVDb250ZW50Q29tcG9uZW50OmFueTtcbiAgZ2V0IHRyZWVOb2RlQ29udGVudENvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuX3RyZWVOb2RlQ29udGVudENvbXBvbmVudCB9O1xuXG4gIHByaXZhdGUgX2xvYWRpbmdDb21wb25lbnQ6YW55O1xuICBnZXQgbG9hZGluZ0NvbXBvbmVudCgpIHsgcmV0dXJuIHRoaXMuX2xvYWRpbmdDb21wb25lbnQgfTtcblxuICAvLyBpZiB0cmVlTm9kZVRlbXBsYXRlIGlzIGEgY29tcG9uZW50IC0gdXNlIGl0LFxuICAvLyBvdGhlcndpc2UgLSBpdCdzIGEgdGVtcGxhdGUsIHNvIHdyYXAgaXQgd2l0aCBhbiBBZEhvYyBjb21wb25lbnRcbiAgX2luaXRUcmVlTm9kZUNvbnRlbnRDb21wb25lbnQoKSB7XG4gICAgdGhpcy5fdHJlZU5vZGVDb250ZW50Q29tcG9uZW50ID0gdGhpcy5vcHRpb25zLnRyZWVOb2RlVGVtcGxhdGU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQgPSB0aGlzLl9jcmVhdGVBZEhvY0NvbXBvbmVudCh0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNhbWUgZm9yIGxvYWRpbmcgY29tcG9uZW50XG4gIF9pbml0TG9hZGluZ0NvbXBvbmVudCgpIHtcbiAgICB0aGlzLl9sb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5vcHRpb25zLmxvYWRpbmdDb21wb25lbnQ7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb2FkaW5nQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fbG9hZGluZ0NvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUFkSG9jQ29tcG9uZW50KHRoaXMuX2xvYWRpbmdDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9sb2FkU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZE5vZGVJZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZE5vZGUgPSB0aGlzLmdldE5vZGVCeUlkKHRoaXMuZm9jdXNlZE5vZGVJZCk7XG4gICAgfVxuXG4gICAgdGhpcy5leHBhbmRlZE5vZGVzID0gT2JqZWN0LmtleXModGhpcy5leHBhbmRlZE5vZGVJZHMpXG4gICAgICAuZmlsdGVyKChpZCkgPT4gdGhpcy5leHBhbmRlZE5vZGVJZHNbaWRdKVxuICAgICAgLm1hcCgoaWQpID0+IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpKVxuXG4gICAgdGhpcy5hY3RpdmVOb2RlcyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlTm9kZUlkcylcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiB0aGlzLmV4cGFuZGVkTm9kZUlkc1tpZF0pXG4gICAgICAubWFwKChpZCkgPT4gdGhpcy5nZXROb2RlQnlJZChpZCkpXG4gIH1cblxuICBnZXROb2RlQnlQYXRoKHBhdGgsIHN0YXJ0Tm9kZT1udWxsKTpUcmVlTm9kZSB7XG4gICAgaWYgKCFwYXRoKSByZXR1cm4gbnVsbDtcblxuICAgIHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZSB8fCB0aGlzLnZpcnR1YWxSb290O1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHN0YXJ0Tm9kZTtcblxuICAgIGlmICghc3RhcnROb2RlLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBwYXRoLnNoaWZ0KCk7XG4gICAgY29uc3QgY2hpbGROb2RlID0gXy5maW5kKHN0YXJ0Tm9kZS5jaGlsZHJlbiwgeyBbdGhpcy5vcHRpb25zLmlkRmllbGRdOiBjaGlsZElkIH0pO1xuXG4gICAgaWYgKCFjaGlsZE5vZGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUJ5UGF0aChwYXRoLCBjaGlsZE5vZGUpXG4gIH1cblxuICBnZXROb2RlQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldE5vZGVCeSh7IGlkIH0pO1xuICB9XG5cbiAgZ2V0Tm9kZUJ5KHByZWRpY2F0ZSwgc3RhcnROb2RlID0gbnVsbCkge1xuICAgIHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZSB8fCB0aGlzLnZpcnR1YWxSb290O1xuXG4gICAgaWYgKCFzdGFydE5vZGUuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZm91bmQgPSBfLmZpbmQoc3RhcnROb2RlLmNoaWxkcmVuLCBwcmVkaWNhdGUpO1xuXG4gICAgaWYgKGZvdW5kKSB7IC8vIGZvdW5kIGluIGNoaWxkcmVuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSBlbHNlIHsgLy8gbG9vayBpbiBjaGlsZHJlbidzIGNoaWxkcmVuXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBzdGFydE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgZm91bmQgPSB0aGlzLmdldE5vZGVCeShwcmVkaWNhdGUsIGNoaWxkKTtcbiAgICAgICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUFkSG9jQ29tcG9uZW50KHRlbXBsYXRlU3RyKTogYW55IHtcbiAgICBAQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICdUcmVlTm9kZVRlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlU3RyXG4gICAgfSlcbiAgICBjbGFzcyBBZEhvY1RyZWVOb2RlVGVtcGxhdGVDb21wb25lbnQge1xuICAgICAgICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIEFkSG9jVHJlZU5vZGVUZW1wbGF0ZUNvbXBvbmVudDtcbiAgfVxuXG4gIGZvY3VzTmV4dE5vZGUoKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUgPyBwcmV2aW91c05vZGUuZmluZE5leHROb2RlKCkgOiB0aGlzLmdldEZpcnN0Um9vdCgpO1xuICAgIG5leHROb2RlICYmIG5leHROb2RlLmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c1ByZXZpb3VzTm9kZSgpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5maW5kUHJldmlvdXNOb2RlKCkgOiB0aGlzLmdldExhc3RSb290KCk7XG4gICAgbmV4dE5vZGUgJiYgbmV4dE5vZGUuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzRHJpbGxEb3duKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgaWYgKHByZXZpb3VzTm9kZSAmJiBwcmV2aW91c05vZGUuaXNDb2xsYXBzZWQgJiYgcHJldmlvdXNOb2RlLmhhc0NoaWxkcmVuKSB7XG4gICAgICBwcmV2aW91c05vZGUudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUgPyBwcmV2aW91c05vZGUuZ2V0Rmlyc3RDaGlsZCgpIDogdGhpcy5nZXRGaXJzdFJvb3QoKTtcbiAgICAgIG5leHROb2RlICYmIG5leHROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNEcmlsbFVwKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgaWYgKCFwcmV2aW91c05vZGUpIHJldHVybjtcbiAgICBpZiAocHJldmlvdXNOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgIHByZXZpb3VzTm9kZS50b2dnbGVFeHBhbmRlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZS5yZWFsUGFyZW50O1xuICAgICAgbmV4dE5vZGUgJiYgbmV4dE5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0FjdGl2ZShub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTm9kZUlkc1tub2RlLmlkXTtcbiAgfVxuXG4gIHNldEFjdGl2ZU5vZGUobm9kZSwgdmFsdWUsIG11bHRpID0gZmFsc2UpIHtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZU5vZGVNdWx0aShub2RlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2V0QWN0aXZlTm9kZVNpbmdsZShub2RlLCB2YWx1ZSk7IFxuICAgIH1cbiAgfVxuXG4gIF9zZXRBY3RpdmVOb2RlU2luZ2xlKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5hY3RpdmVOb2RlSWRzID0ge307XG4gICAgdGhpcy5hY3RpdmVOb2RlcyA9IFtdO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmVOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgdGhpcy5hY3RpdmVOb2RlSWRzW25vZGUuaWRdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfc2V0QWN0aXZlTm9kZU11bHRpKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5hY3RpdmVOb2RlSWRzW25vZGUuaWRdID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIV8uaW5jbHVkZXModGhpcy5hY3RpdmVOb2Rlcywgbm9kZSkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmFjdGl2ZU5vZGVzLCBub2RlKSkge1xuICAgICAgICBfLnJlbW92ZSh0aGlzLmFjdGl2ZU5vZGVzLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0V4cGFuZGVkKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZE5vZGVJZHNbbm9kZS5pZF07XG4gIH1cblxuICBzZXRFeHBhbmRlZE5vZGUobm9kZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IF8uaW5kZXhPZih0aGlzLmV4cGFuZGVkTm9kZXMsIG5vZGUpO1xuXG4gICAgaWYgKHZhbHVlICYmICFpbmRleCkgdGhpcy5leHBhbmRlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgZWxzZSBpZiAoaW5kZXgpIF8ucHVsbEF0KHRoaXMuZXhwYW5kZWROb2RlcywgaW5kZXgpO1xuXG4gICAgdGhpcy5leHBhbmRlZE5vZGVJZHNbbm9kZS5pZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHBlcmZvcm1LZXlBY3Rpb24obm9kZSwgJGV2ZW50KSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5vcHRpb25zLmFjdGlvbk1hcHBpbmcua2V5c1skZXZlbnQua2V5Q29kZV1cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24odGhpcywgbm9kZSwgJGV2ZW50KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=