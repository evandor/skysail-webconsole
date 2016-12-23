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
var deprecated_1 = require('../deprecated');
var _ = require('lodash');
var TreeModel = (function () {
    function TreeModel() {
        this.options = new tree_options_model_1.TreeOptions();
        this.expandedNodeIds = {};
        this.activeNodeIds = {};
        this._focusedNode = null;
        this.focusedNodeId = null;
        this._dragNode = null;
        this._dropLocation = null;
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
        var virtualRootConfig = (_a = {
                virtual: true
            },
            _a[this.options.childrenField] = this.nodes,
            _a
        );
        this.virtualRoot = this.getTreeNode(virtualRootConfig, null);
        this.roots = this.virtualRoot.children;
        this._initTreeNodeContentComponent();
        this._initLoadingComponent();
        this._loadState();
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.fireEvent({ eventName: events_1.TREE_EVENTS.onInitialized });
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onUpdateData });
        }
        var _a;
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
        this.events[event.eventName].emit(event);
        this.events.onEvent.emit(event);
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
    TreeModel.prototype.getVisibleRoots = function () {
        return this.virtualRoot.getVisibleChildren();
    };
    TreeModel.prototype.getFirstRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return _.first(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    TreeModel.prototype.getLastRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return _.last(skipHidden ? this.getVisibleRoots() : this.roots);
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
        this.expandedNodes = _.compact(this.expandedNodes);
        this.activeNodes = Object.keys(this.activeNodeIds)
            .filter(function (id) { return _this.expandedNodeIds[id]; })
            .map(function (id) { return _this.getNodeById(id); });
        this.activeNodes = _.compact(this.activeNodes);
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
        var nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        nextNode && nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
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
        if (value) {
            node.focus();
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onActivate, node: node });
        }
        else {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onDeactivate, node: node });
        }
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
    };
    TreeModel.prototype._setActiveNodeSingle = function (node, value) {
        var _this = this;
        // Deactivate all other nodes:
        this.activeNodes
            .filter(function (activeNode) { return activeNode != node; })
            .forEach(function (activeNode) {
            _this.fireEvent({ eventName: events_1.TREE_EVENTS.onDeactivate, node: activeNode });
        });
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
            $event.preventDefault();
            action(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    };
    TreeModel.prototype.filterNodes = function (filter, autoShow) {
        if (autoShow === void 0) { autoShow = false; }
        var filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        if (_.isString(filter)) {
            filterFn = function (node) { return node.displayField.toLowerCase().indexOf(filter.toLowerCase()) != -1; };
        }
        else if (_.isFunction(filter)) {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function', filter);
        }
        this.roots.forEach(function (node) { return node.filter(filterFn, autoShow); });
    };
    TreeModel.prototype.clearFilter = function () {
        this.roots.forEach(function (node) { return node.clearFilter(); });
    };
    TreeModel.prototype.canMoveNode = function (_a) {
        var from = _a.from, to = _a.to;
        // same node:
        if (from.node === to.node && from.index === to.index) {
            return false;
        }
        var fromChildren = from.node.children;
        var fromNode = fromChildren[from.index];
        return !to.node.isDescendantOf(fromNode);
    };
    TreeModel.prototype.moveNode = function (_a) {
        var from = _a.from, to = _a.to;
        if (!this.canMoveNode({ from: from, to: to }))
            return;
        var fromChildren = from.node.getField('children');
        // If node doesn't have children - create children array
        if (!to.node.getField('children')) {
            to.node.setField('children', []);
        }
        var toChildren = to.node.getField('children');
        var node = fromChildren.splice(from.index, 1)[0];
        // Compensate for index if already removed from parent:
        var toIndex = (from.node === to.node && to.index > from.index) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, node);
        this.update();
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onMoveNode, node: node, to: to });
    };
    // TODO: move to a different service:
    TreeModel.prototype.setDragNode = function (dragNode) {
        this._dragNode = dragNode;
    };
    TreeModel.prototype.getDragNode = function () {
        return this._dragNode || { node: null, index: null };
    };
    TreeModel.prototype.isDragging = function () {
        return this.getDragNode().node;
    };
    TreeModel.prototype.setDropLocation = function (dropLocation) {
        this._dropLocation = dropLocation;
    };
    TreeModel.prototype.getDropLocation = function () {
        return this._dropLocation || { component: null, node: null, index: null };
    };
    TreeModel.prototype.isDraggingOver = function (component) {
        return this.getDropLocation().component === component;
    };
    TreeModel.prototype.cancelDrag = function () {
        this.setDropLocation(null);
        this.setDragNode(null);
    };
    TreeModel.focusedTree = null;
    TreeModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TreeModel);
    return TreeModel;
}());
exports.TreeModel = TreeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvdHJlZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdFLGVBQWUsQ0FBQyxDQUFBO0FBRXhGLGdDQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLG1DQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBRW5ELHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELDJCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUc1QjtJQUFBO1FBRUUsWUFBTyxHQUFnQixJQUFJLGdDQUFXLEVBQUUsQ0FBQztRQUV6QyxvQkFBZSxHQUE2QixFQUFFLENBQUM7UUFFL0Msa0JBQWEsR0FBNkIsRUFBRSxDQUFDO1FBRTdDLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBc0MsSUFBSSxDQUFDO1FBQ3BELGtCQUFhLEdBQW9ELElBQUksQ0FBQztRQUl0RSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBVyxDQUFDLENBQUM7SUF3WXhDLENBQUM7SUF0WUMsMkJBQU8sR0FBUCxVQUFRLEVBQTJFO1lBQXpFLGdCQUFLLEVBQUUsZUFBYyxFQUFkLG1DQUFjLEVBQUUsY0FBYSxFQUFiLGtDQUFhO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0NBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxF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dHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElUcmVlTm9kZVRlbXBsYXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4vdHJlZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IElUcmVlTW9kZWwgfSBmcm9tICcuLi9kZWZzL2FwaSc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5pbXBvcnQgeyBkZXByZWNhdGVkIH0gZnJvbSAnLi4vZGVwcmVjYXRlZCc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWVNb2RlbCBpbXBsZW1lbnRzIElUcmVlTW9kZWwge1xuICByb290czogVHJlZU5vZGVbXTtcbiAgb3B0aW9uczogVHJlZU9wdGlvbnMgPSBuZXcgVHJlZU9wdGlvbnMoKTtcbiAgbm9kZXM6IGFueVtdO1xuICBleHBhbmRlZE5vZGVJZHM6IHsgW2lkOnN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBleHBhbmRlZE5vZGVzOiBUcmVlTm9kZVtdO1xuICBhY3RpdmVOb2RlSWRzOiB7IFtpZDpzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgYWN0aXZlTm9kZXM6IFRyZWVOb2RlW107XG4gIF9mb2N1c2VkTm9kZTogVHJlZU5vZGUgPSBudWxsO1xuICBmb2N1c2VkTm9kZUlkOiBzdHJpbmcgPSBudWxsO1xuICBfZHJhZ05vZGU6IHsgbm9kZTogVHJlZU5vZGUsIGluZGV4OiBudW1iZXIgfSA9IG51bGw7XG4gIF9kcm9wTG9jYXRpb246eyBjb21wb25lbnQ6YW55LCBub2RlOiBUcmVlTm9kZSwgaW5kZXg6IG51bWJlciB9ID0gbnVsbDtcbiAgc3RhdGljIGZvY3VzZWRUcmVlID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudHM6IGFueTtcbiAgdmlydHVhbFJvb3Q6IFRyZWVOb2RlO1xuICBmaXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgZXZlbnROYW1lcyA9IE9iamVjdC5rZXlzKFRSRUVfRVZFTlRTKTtcblxuICBzZXREYXRhKHsgbm9kZXMsIG9wdGlvbnMgPSBudWxsLCBldmVudHMgPSBudWxsIH06e25vZGVzOmFueSxvcHRpb25zOmFueSxldmVudHM6YW55fSkge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgVHJlZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIH1cbiAgICBpZiAobm9kZXMpIHtcbiAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIFJlYnVpbGQgdHJlZTpcbiAgICBsZXQgdmlydHVhbFJvb3RDb25maWcgPSB7XG4gICAgICB2aXJ0dWFsOiB0cnVlLFxuICAgICAgW3RoaXMub3B0aW9ucy5jaGlsZHJlbkZpZWxkXTogdGhpcy5ub2Rlc1xuICAgIH07XG5cbiAgICB0aGlzLnZpcnR1YWxSb290ID0gdGhpcy5nZXRUcmVlTm9kZSh2aXJ0dWFsUm9vdENvbmZpZywgbnVsbCk7XG5cbiAgICB0aGlzLnJvb3RzID0gdGhpcy52aXJ0dWFsUm9vdC5jaGlsZHJlbjtcblxuICAgIHRoaXMuX2luaXRUcmVlTm9kZUNvbnRlbnRDb21wb25lbnQoKTtcbiAgICB0aGlzLl9pbml0TG9hZGluZ0NvbXBvbmVudCgpO1xuXG4gICAgdGhpcy5fbG9hZFN0YXRlKCk7XG5cbiAgICAvLyBGaXJlIGV2ZW50OlxuICAgIGlmICh0aGlzLmZpcnN0VXBkYXRlKSB7XG4gICAgICBpZiAodGhpcy5yb290cykge1xuICAgICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Jbml0aWFsaXplZCB9KTtcbiAgICAgICAgdGhpcy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVFeHBhbmRlZE5vZGVzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vblVwZGF0ZURhdGEgfSk7XG4gICAgfVxuICB9XG5cbiAgX2NhbGN1bGF0ZUV4cGFuZGVkTm9kZXMoc3RhcnROb2RlID0gbnVsbCkge1xuICAgIHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZSB8fCB0aGlzLnZpcnR1YWxSb290O1xuXG4gICAgaWYgKHN0YXJ0Tm9kZS5kYXRhW3RoaXMub3B0aW9ucy5pc0V4cGFuZGVkRmllbGRdKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkc1tzdGFydE5vZGUuaWRdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Tm9kZS5jaGlsZHJlbikge1xuICAgICAgc3RhcnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9jYWxjdWxhdGVFeHBhbmRlZE5vZGVzKGNoaWxkKSk7XG4gICAgfVxuICB9XG5cbiAgZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnQuZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmV2ZW50cy5vbkV2ZW50LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWROb2RlKCkgeyBkZXByZWNhdGVkKCdmb2N1c2VkTm9kZSBhdHRyaWJ1dGUnLCAnZ2V0Rm9jdXNlZE5vZGUnKTsgcmV0dXJuIHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTsgfVxuICBzZXQgZm9jdXNlZE5vZGUodmFsdWUpIHsgZGVwcmVjYXRlZCgnZm9jdXNlZE5vZGUgPSAnLCAnc2V0Rm9jdXNlZE5vZGUnKTsgdGhpcy5zZXRGb2N1c2VkTm9kZSh2YWx1ZSkgfTtcblxuICBnZXRGb2N1c2VkTm9kZSgpOlRyZWVOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZE5vZGU7XG4gIH1cblxuICBzZXRGb2N1c2VkTm9kZShub2RlKSB7XG4gICAgdGhpcy5fZm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIHRoaXMuZm9jdXNlZE5vZGVJZCA9IG5vZGUgPyBub2RlLmlkIDogbnVsbDtcbiAgfVxuXG4gIGdldEFjdGl2ZU5vZGUoKTpUcmVlTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTm9kZXNbMF07XG4gIH1cblxuICBnZXRBY3RpdmVOb2RlcygpOlRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU5vZGVzO1xuICB9XG5cbiAgZ2V0VHJlZU5vZGUobm9kZTphbnksIHBhcmVudDpUcmVlTm9kZSk6VHJlZU5vZGUge1xuICAgIHJldHVybiBuZXcgVHJlZU5vZGUobm9kZSwgcGFyZW50LCB0aGlzKTtcbiAgfVxuXG4gIGdldFZpc2libGVSb290cygpIHtcbiAgICByZXR1cm4gdGhpcy52aXJ0dWFsUm9vdC5nZXRWaXNpYmxlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIGdldEZpcnN0Um9vdChza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gXy5maXJzdChza2lwSGlkZGVuID8gdGhpcy5nZXRWaXNpYmxlUm9vdHMoKSA6IHRoaXMucm9vdHMpO1xuICB9XG5cbiAgZ2V0TGFzdFJvb3Qoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIF8ubGFzdChza2lwSGlkZGVuID8gdGhpcy5nZXRWaXNpYmxlUm9vdHMoKSA6IHRoaXMucm9vdHMpO1xuICB9XG5cbiAgZ2V0IGlzRm9jdXNlZCgpIHtcbiAgICByZXR1cm4gVHJlZU1vZGVsLmZvY3VzZWRUcmVlID09PSB0aGlzO1xuICB9XG5cbiAgaXNOb2RlRm9jdXNlZChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWROb2RlID09PSBub2RlO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICBUcmVlTW9kZWwuZm9jdXNlZFRyZWUgPSB2YWx1ZSA/IHRoaXMgOiBudWxsO1xuICB9XG5cblxuICBwcml2YXRlIF90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQ6YW55O1xuICBnZXQgdHJlZU5vZGVDb250ZW50Q29tcG9uZW50KCkgeyByZXR1cm4gdGhpcy5fdHJlZU5vZGVDb250ZW50Q29tcG9uZW50IH07XG5cbiAgcHJpdmF0ZSBfbG9hZGluZ0NvbXBvbmVudDphbnk7XG4gIGdldCBsb2FkaW5nQ29tcG9uZW50KCkgeyByZXR1cm4gdGhpcy5fbG9hZGluZ0NvbXBvbmVudCB9O1xuXG4gIC8vIGlmIHRyZWVOb2RlVGVtcGxhdGUgaXMgYSBjb21wb25lbnQgLSB1c2UgaXQsXG4gIC8vIG90aGVyd2lzZSAtIGl0J3MgYSB0ZW1wbGF0ZSwgc28gd3JhcCBpdCB3aXRoIGFuIEFkSG9jIGNvbXBvbmVudFxuICBfaW5pdFRyZWVOb2RlQ29udGVudENvbXBvbmVudCgpIHtcbiAgICB0aGlzLl90cmVlTm9kZUNvbnRlbnRDb21wb25lbnQgPSB0aGlzLm9wdGlvbnMudHJlZU5vZGVUZW1wbGF0ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3RyZWVOb2RlQ29udGVudENvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3RyZWVOb2RlQ29udGVudENvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUFkSG9jQ29tcG9uZW50KHRoaXMuX3RyZWVOb2RlQ29udGVudENvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2FtZSBmb3IgbG9hZGluZyBjb21wb25lbnRcbiAgX2luaXRMb2FkaW5nQ29tcG9uZW50KCkge1xuICAgIHRoaXMuX2xvYWRpbmdDb21wb25lbnQgPSB0aGlzLm9wdGlvbnMubG9hZGluZ0NvbXBvbmVudDtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2xvYWRpbmdDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5fY3JlYXRlQWRIb2NDb21wb25lbnQodGhpcy5fbG9hZGluZ0NvbXBvbmVudCk7XG4gICAgfVxuICB9XG5cbiAgX2xvYWRTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkTm9kZUlkKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWQodGhpcy5mb2N1c2VkTm9kZUlkKTtcbiAgICB9XG5cbiAgICB0aGlzLmV4cGFuZGVkTm9kZXMgPSBPYmplY3Qua2V5cyh0aGlzLmV4cGFuZGVkTm9kZUlkcylcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiB0aGlzLmV4cGFuZGVkTm9kZUlkc1tpZF0pXG4gICAgICAubWFwKChpZCkgPT4gdGhpcy5nZXROb2RlQnlJZChpZCkpXG4gICAgdGhpcy5leHBhbmRlZE5vZGVzID0gXy5jb21wYWN0KHRoaXMuZXhwYW5kZWROb2Rlcyk7XG5cbiAgICB0aGlzLmFjdGl2ZU5vZGVzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVOb2RlSWRzKVxuICAgICAgLmZpbHRlcigoaWQpID0+IHRoaXMuZXhwYW5kZWROb2RlSWRzW2lkXSlcbiAgICAgIC5tYXAoKGlkKSA9PiB0aGlzLmdldE5vZGVCeUlkKGlkKSlcbiAgICB0aGlzLmFjdGl2ZU5vZGVzID0gXy5jb21wYWN0KHRoaXMuYWN0aXZlTm9kZXMpO1xuICB9XG5cbiAgZ2V0Tm9kZUJ5UGF0aChwYXRoLCBzdGFydE5vZGU9bnVsbCk6VHJlZU5vZGUge1xuICAgIGlmICghcGF0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUgfHwgdGhpcy52aXJ0dWFsUm9vdDtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiBzdGFydE5vZGU7XG5cbiAgICBpZiAoIXN0YXJ0Tm9kZS5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBjaGlsZElkID0gcGF0aC5zaGlmdCgpO1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IF8uZmluZChzdGFydE5vZGUuY2hpbGRyZW4sIHsgW3RoaXMub3B0aW9ucy5pZEZpZWxkXTogY2hpbGRJZCB9KTtcblxuICAgIGlmICghY2hpbGROb2RlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmdldE5vZGVCeVBhdGgocGF0aCwgY2hpbGROb2RlKVxuICB9XG5cbiAgZ2V0Tm9kZUJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlQnkoeyBpZCB9KTtcbiAgfVxuXG4gIGdldE5vZGVCeShwcmVkaWNhdGUsIHN0YXJ0Tm9kZSA9IG51bGwpIHtcbiAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUgfHwgdGhpcy52aXJ0dWFsUm9vdDtcblxuICAgIGlmICghc3RhcnROb2RlLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZvdW5kID0gXy5maW5kKHN0YXJ0Tm9kZS5jaGlsZHJlbiwgcHJlZGljYXRlKTtcblxuICAgIGlmIChmb3VuZCkgeyAvLyBmb3VuZCBpbiBjaGlsZHJlblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0gZWxzZSB7IC8vIGxvb2sgaW4gY2hpbGRyZW4ncyBjaGlsZHJlblxuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc3RhcnROb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5nZXROb2RlQnkocHJlZGljYXRlLCBjaGlsZCk7XG4gICAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVBZEhvY0NvbXBvbmVudCh0ZW1wbGF0ZVN0cik6IGFueSB7XG4gICAgQENvbXBvbmVudCh7XG4gICAgICAgIHNlbGVjdG9yOiAnVHJlZU5vZGVUZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVN0clxuICAgIH0pXG4gICAgY2xhc3MgQWRIb2NUcmVlTm9kZVRlbXBsYXRlQ29tcG9uZW50IHtcbiAgICAgICAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gICAgfVxuICAgIHJldHVybiBBZEhvY1RyZWVOb2RlVGVtcGxhdGVDb21wb25lbnQ7XG4gIH1cblxuICBmb2N1c05leHROb2RlKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgbGV0IG5leHROb2RlID0gcHJldmlvdXNOb2RlID8gcHJldmlvdXNOb2RlLmZpbmROZXh0Tm9kZSh0cnVlLCB0cnVlKSA6IHRoaXMuZ2V0Rmlyc3RSb290KHRydWUpO1xuICAgIG5leHROb2RlICYmIG5leHROb2RlLmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c1ByZXZpb3VzTm9kZSgpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5maW5kUHJldmlvdXNOb2RlKHRydWUpIDogdGhpcy5nZXRMYXN0Um9vdCh0cnVlKTtcbiAgICBuZXh0Tm9kZSAmJiBuZXh0Tm9kZS5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXNEcmlsbERvd24oKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICBpZiAocHJldmlvdXNOb2RlICYmIHByZXZpb3VzTm9kZS5pc0NvbGxhcHNlZCAmJiBwcmV2aW91c05vZGUuaGFzQ2hpbGRyZW4pIHtcbiAgICAgIHByZXZpb3VzTm9kZS50b2dnbGVFeHBhbmRlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5nZXRGaXJzdENoaWxkKHRydWUpIDogdGhpcy5nZXRGaXJzdFJvb3QodHJ1ZSk7XG4gICAgICBuZXh0Tm9kZSAmJiBuZXh0Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzRHJpbGxVcCgpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGlmICghcHJldmlvdXNOb2RlKSByZXR1cm47XG4gICAgaWYgKHByZXZpb3VzTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICBwcmV2aW91c05vZGUudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUucmVhbFBhcmVudDtcbiAgICAgIG5leHROb2RlICYmIG5leHROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNBY3RpdmUobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU5vZGVJZHNbbm9kZS5pZF07XG4gIH1cblxuICBzZXRBY3RpdmVOb2RlKG5vZGUsIHZhbHVlLCBtdWx0aSA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBub2RlLmZvY3VzKCk7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25BY3RpdmF0ZSwgbm9kZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uRGVhY3RpdmF0ZSwgbm9kZSB9KTtcbiAgICB9XG5cbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZU5vZGVNdWx0aShub2RlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2V0QWN0aXZlTm9kZVNpbmdsZShub2RlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEFjdGl2ZU5vZGVTaW5nbGUobm9kZSwgdmFsdWUpIHtcbiAgICAvLyBEZWFjdGl2YXRlIGFsbCBvdGhlciBub2RlczpcbiAgICB0aGlzLmFjdGl2ZU5vZGVzXG4gICAgICAuZmlsdGVyKChhY3RpdmVOb2RlKSA9PiBhY3RpdmVOb2RlICE9IG5vZGUpXG4gICAgICAuZm9yRWFjaCgoYWN0aXZlTm9kZSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25EZWFjdGl2YXRlLCBub2RlOiBhY3RpdmVOb2RlIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2ZU5vZGVJZHMgPSB7fTtcbiAgICB0aGlzLmFjdGl2ZU5vZGVzID0gW107XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZU5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB0aGlzLmFjdGl2ZU5vZGVJZHNbbm9kZS5pZF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRBY3RpdmVOb2RlTXVsdGkobm9kZSwgdmFsdWUpIHtcbiAgICB0aGlzLmFjdGl2ZU5vZGVJZHNbbm9kZS5pZF0gPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghXy5pbmNsdWRlcyh0aGlzLmFjdGl2ZU5vZGVzLCBub2RlKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuYWN0aXZlTm9kZXMsIG5vZGUpKSB7XG4gICAgICAgIF8ucmVtb3ZlKHRoaXMuYWN0aXZlTm9kZXMsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzRXhwYW5kZWQobm9kZSkge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkTm9kZUlkc1tub2RlLmlkXTtcbiAgfVxuXG4gIHNldEV4cGFuZGVkTm9kZShub2RlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gXy5pbmRleE9mKHRoaXMuZXhwYW5kZWROb2Rlcywgbm9kZSk7XG5cbiAgICBpZiAodmFsdWUgJiYgIWluZGV4KSB0aGlzLmV4cGFuZGVkTm9kZXMucHVzaChub2RlKTtcbiAgICBlbHNlIGlmIChpbmRleCkgXy5wdWxsQXQodGhpcy5leHBhbmRlZE5vZGVzLCBpbmRleCk7XG5cbiAgICB0aGlzLmV4cGFuZGVkTm9kZUlkc1tub2RlLmlkXSA9IHZhbHVlO1xuICB9XG5cbiAgcGVyZm9ybUtleUFjdGlvbihub2RlLCAkZXZlbnQpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLm9wdGlvbnMuYWN0aW9uTWFwcGluZy5rZXlzWyRldmVudC5rZXlDb2RlXVxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWN0aW9uKHRoaXMsIG5vZGUsICRldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlck5vZGVzKGZpbHRlciwgYXV0b1Nob3cgPSBmYWxzZSkge1xuICAgIGxldCBmaWx0ZXJGbjtcblxuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbGVhckZpbHRlcigpO1xuICAgIH1cblxuICAgIGlmIChfLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICAgIGZpbHRlckZuID0gKG5vZGUpID0+IG5vZGUuZGlzcGxheUZpZWxkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT0gLTFcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICAgICBmaWx0ZXJGbiA9IGZpbHRlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEb25cXCd0IGtub3cgd2hhdCB0byBkbyB3aXRoIGZpbHRlcicsIGZpbHRlcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdTaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGZ1bmN0aW9uJywgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5yb290cy5mb3JFYWNoKChub2RlKSA9PiBub2RlLmZpbHRlcihmaWx0ZXJGbiwgYXV0b1Nob3cpKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMucm9vdHMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGVhckZpbHRlcigpKTtcbiAgfVxuXG4gIGNhbk1vdmVOb2RlKHsgZnJvbSwgdG8gfSkge1xuICAgIC8vIHNhbWUgbm9kZTpcbiAgICBpZiAoZnJvbS5ub2RlID09PSB0by5ub2RlICYmIGZyb20uaW5kZXggPT09IHRvLmluZGV4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbUNoaWxkcmVuID0gZnJvbS5ub2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IGZyb21Ob2RlID0gZnJvbUNoaWxkcmVuW2Zyb20uaW5kZXhdO1xuXG4gICAgcmV0dXJuICF0by5ub2RlLmlzRGVzY2VuZGFudE9mKGZyb21Ob2RlKTtcbiAgfVxuXG4gIG1vdmVOb2RlKHsgZnJvbSwgdG8gfSkge1xuICAgIGlmICghdGhpcy5jYW5Nb3ZlTm9kZSh7IGZyb20gLCB0byB9KSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZnJvbUNoaWxkcmVuID0gZnJvbS5ub2RlLmdldEZpZWxkKCdjaGlsZHJlbicpO1xuXG4gICAgLy8gSWYgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4gLSBjcmVhdGUgY2hpbGRyZW4gYXJyYXlcbiAgICBpZiAoIXRvLm5vZGUuZ2V0RmllbGQoJ2NoaWxkcmVuJykpIHtcbiAgICAgIHRvLm5vZGUuc2V0RmllbGQoJ2NoaWxkcmVuJywgW10pO1xuICAgIH1cbiAgICBjb25zdCB0b0NoaWxkcmVuID0gdG8ubm9kZS5nZXRGaWVsZCgnY2hpbGRyZW4nKTtcblxuICAgIGNvbnN0IG5vZGUgPSBmcm9tQ2hpbGRyZW4uc3BsaWNlKGZyb20uaW5kZXgsIDEpWzBdO1xuXG4gICAgLy8gQ29tcGVuc2F0ZSBmb3IgaW5kZXggaWYgYWxyZWFkeSByZW1vdmVkIGZyb20gcGFyZW50OlxuICAgIGxldCB0b0luZGV4ID0gKGZyb20ubm9kZSA9PT0gdG8ubm9kZSAmJiB0by5pbmRleCA+IGZyb20uaW5kZXgpID8gdG8uaW5kZXggLSAxIDogdG8uaW5kZXg7XG5cbiAgICB0b0NoaWxkcmVuLnNwbGljZSh0b0luZGV4LCAwLCBub2RlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Nb3ZlTm9kZSwgbm9kZSwgdG8gfSk7XG4gIH1cblxuICAvLyBUT0RPOiBtb3ZlIHRvIGEgZGlmZmVyZW50IHNlcnZpY2U6XG4gIHNldERyYWdOb2RlKGRyYWdOb2RlOnsgbm9kZTogVHJlZU5vZGUsIGluZGV4Om51bWJlciB9KSB7XG4gICAgdGhpcy5fZHJhZ05vZGUgPSBkcmFnTm9kZTtcbiAgfVxuXG4gIGdldERyYWdOb2RlKCk6eyBub2RlOiBUcmVlTm9kZSwgaW5kZXg6bnVtYmVyIH0ge1xuICAgIHJldHVybiB0aGlzLl9kcmFnTm9kZSB8fCB7IG5vZGU6bnVsbCwgaW5kZXg6IG51bGwgfTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RHJhZ05vZGUoKS5ub2RlO1xuICB9XG5cbiAgc2V0RHJvcExvY2F0aW9uKGRyb3BMb2NhdGlvbjogeyBjb21wb25lbnQ6IGFueSwgbm9kZTogVHJlZU5vZGUsIGluZGV4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuX2Ryb3BMb2NhdGlvbiA9IGRyb3BMb2NhdGlvbjtcbiAgfVxuXG4gIGdldERyb3BMb2NhdGlvbigpOiB7IGNvbXBvbmVudDogYW55LCBub2RlOiBUcmVlTm9kZSwgaW5kZXg6IG51bWJlciB9IHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcExvY2F0aW9uIHx8IHtjb21wb25lbnQ6IG51bGwsIG5vZGU6IG51bGwsIGluZGV4OiBudWxsfTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmdPdmVyKGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmdldERyb3BMb2NhdGlvbigpLmNvbXBvbmVudCA9PT0gY29tcG9uZW50O1xuICB9XG5cbiAgY2FuY2VsRHJhZygpIHtcbiAgICB0aGlzLnNldERyb3BMb2NhdGlvbihudWxsKTtcbiAgICB0aGlzLnNldERyYWdOb2RlKG51bGwpO1xuICB9XG59XG4iXX0=