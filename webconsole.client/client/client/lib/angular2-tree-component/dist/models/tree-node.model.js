"use strict";
var events_1 = require('../constants/events');
var deprecated_1 = require('./deprecated');
var _ = require('lodash');
var TreeNode = (function () {
    function TreeNode(data, parent, treeModel) {
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.id = this.id || uuid(); // Make sure there's a unique ID
        this.level = this.parent ? this.parent.level + 1 : 0;
        this.path = this.parent ? this.parent.path.concat([this.id]) : [];
        if (this.getField('children')) {
            this._initChildren();
        }
    }
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this.treeModel.isExpanded(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this.treeModel.isActive(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.isNodeFocused(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "originalNode", {
        get: function () { return this._originalNode; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "hasChildren", {
        // helper get functions:
        get: function () {
            return !!(this.data.hasChildren || (this.children && this.children.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isCollapsed", {
        get: function () { return !this.isExpanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isLeaf", {
        get: function () { return !this.hasChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () { return this.parent.data.virtual; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "realParent", {
        get: function () { return this.isRoot ? null : this.parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "options", {
        // proxy functions:
        get: function () { return this.treeModel.options; },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.fireEvent = function (event) { this.treeModel.fireEvent(event); };
    Object.defineProperty(TreeNode.prototype, "context", {
        get: function () { return this.options.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "displayField", {
        // field accessors:
        get: function () {
            return this.getField('display');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "id", {
        get: function () {
            return this.getField('id');
        },
        set: function (value) {
            this.data['idField'] = value;
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getField = function (key) {
        return this.data[this.options[(key + "Field")]];
    };
    TreeNode.prototype.setField = function (key, value) {
        this.data[this.options[(key + "Field")]] = value;
    };
    // traversing:
    TreeNode.prototype.findAdjacentSibling = function (steps) {
        var index = this._getIndexInParent();
        return this._getParentsChildren()[index + steps];
    };
    TreeNode.prototype.findNextSibling = function () {
        return this.findAdjacentSibling(+1);
    };
    TreeNode.prototype.findPreviousSibling = function () {
        return this.findAdjacentSibling(-1);
    };
    TreeNode.prototype.getFirstChild = function () {
        return _.first(this.children || []);
    };
    TreeNode.prototype.getLastChild = function () {
        return _.last(this.children || []);
    };
    TreeNode.prototype.findNextNode = function (goInside) {
        if (goInside === void 0) { goInside = true; }
        return goInside && this.isExpanded && this.getFirstChild() ||
            this.findNextSibling() ||
            this.parent && this.parent.findNextNode(false);
    };
    TreeNode.prototype.findPreviousNode = function () {
        var previousSibling = this.findPreviousSibling();
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant();
    };
    TreeNode.prototype._getLastOpenDescendant = function () {
        var lastChild = this.getLastChild();
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant();
    };
    TreeNode.prototype._getParentsChildren = function () {
        var children = _.get(this, 'parent.children');
        return children || [];
    };
    TreeNode.prototype._getIndexInParent = function () {
        return this._getParentsChildren().indexOf(this);
    };
    // helper methods:
    TreeNode.prototype.loadChildren = function () {
        var _this = this;
        if (!this.options.getChildren) {
            throw new Error('Node doesn\'t have children, or a getChildren method');
        }
        Promise.resolve(this.options.getChildren(this))
            .then(function (children) {
            if (children) {
                _this.setField('children', children);
                _this._initChildren();
            }
        });
    };
    TreeNode.prototype._setIsExpanded = function (value) {
        this.isExpanded = value;
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onToggle, node: this, isExpanded: this.isExpanded });
    };
    TreeNode.prototype.toggle = function () {
        deprecated_1.deprecated('toggle', 'toggleExpanded');
        this.toggleExpanded();
    };
    TreeNode.prototype.expand = function () {
        if (!this.isExpanded) {
            this.toggleExpanded();
        }
    };
    TreeNode.prototype.collapse = function () {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
    };
    TreeNode.prototype.toggleExpanded = function () {
        this.setIsExpanded(!this.isExpanded);
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onToggle, node: this, isExpanded: this.isExpanded });
    };
    TreeNode.prototype.setIsExpanded = function (value) {
        this.treeModel.setExpandedNode(this, value);
        if (!this.children && this.hasChildren && value) {
            this.loadChildren();
        }
    };
    ;
    TreeNode.prototype.setIsActive = function (value, multi) {
        if (multi === void 0) { multi = false; }
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onActivate, node: this });
            this.focus();
        }
        else {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onDeactivate, node: this });
        }
    };
    TreeNode.prototype.toggleActivated = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(!this.isActive, multi);
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onActiveChanged, node: this, isActive: this.isActive });
    };
    TreeNode.prototype.scrollIntoView = function () {
        var nativeElement = this.elementRef.nativeElement;
        nativeElement.scrollIntoViewIfNeeded && nativeElement.scrollIntoViewIfNeeded();
    };
    TreeNode.prototype.focus = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        this.scrollIntoView();
        if (previousNode) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onBlur, node: previousNode });
        }
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onFocus, node: this });
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onBlur, node: this });
        }
    };
    TreeNode.prototype.doubleClick = function (rawEvent) {
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onDoubleClick, node: this, rawEvent: rawEvent });
    };
    TreeNode.prototype.mouseAction = function (actionName, $event) {
        this.treeModel.setFocus(true);
        var actionMapping = $event.shiftKey ? this.options.actionMapping.mouse.shift :
            $event.ctrlKey ? this.options.actionMapping.mouse.ctrl :
                $event.altKey ? this.options.actionMapping.mouse.alt :
                    this.options.actionMapping.mouse;
        var action = actionMapping[actionName];
        if (action) {
            $event.preventDefault();
            action(this.treeModel, this, $event);
            // TODO: remove after deprecation of context menu
            if (actionName === 'dblClick') {
                this.fireEvent({ eventName: events_1.TREE_EVENTS.onContextMenu, node: this, rawEvent: $event });
            }
        }
    };
    TreeNode.prototype._initChildren = function () {
        var _this = this;
        this.children = this.getField('children')
            .map(function (c) { return new TreeNode(c, _this, _this.treeModel); });
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW5vZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELDJCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUU1QjtJQWFFLGtCQUFtQixJQUFRLEVBQVMsTUFBZSxFQUFTLFNBQW1CO1FBQTVELFNBQUksR0FBSixJQUFJLENBQUk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFFLElBQUksQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBcEJELHNCQUFJLGdDQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7O0lBQzNELHNCQUFJLDhCQUFRO2FBQVosY0FBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENB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TyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFbkMsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXJDLGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxvQkFBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDdEMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUksRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFyT0QsSUFxT0M7QUFyT1ksZ0JBQVEsV0FxT3BCLENBQUE7QUFFRDtJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi90cmVlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSVRyZWVOb2RlIH0gZnJvbSAnLi4vZGVmcy9hcGknO1xuaW1wb3J0IHsgVFJFRV9FVkVOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJztcbmltcG9ydCB7IGRlcHJlY2F0ZWQgfSBmcm9tICcuL2RlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZSBpbXBsZW1lbnRzIElUcmVlTm9kZSB7XG4gIGdldCBpc0V4cGFuZGVkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNFeHBhbmRlZCh0aGlzKSB9O1xuICBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc0FjdGl2ZSh0aGlzKSB9O1xuICBnZXQgaXNGb2N1c2VkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNOb2RlRm9jdXNlZCh0aGlzKSB9O1xuXG4gIGxldmVsOiBudW1iZXI7XG4gIHBhdGg6IHN0cmluZ1tdO1xuICBlbGVtZW50UmVmOkVsZW1lbnRSZWY7XG4gIGNoaWxkcmVuOiBUcmVlTm9kZVtdO1xuXG4gIHByaXZhdGUgX29yaWdpbmFsTm9kZTogYW55O1xuICBnZXQgb3JpZ2luYWxOb2RlKCkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxOb2RlIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6YW55LCBwdWJsaWMgcGFyZW50OlRyZWVOb2RlLCBwdWJsaWMgdHJlZU1vZGVsOlRyZWVNb2RlbCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHV1aWQoKTsgLy8gTWFrZSBzdXJlIHRoZXJlJ3MgYSB1bmlxdWUgSURcbiAgICB0aGlzLmxldmVsID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5sZXZlbCArIDEgOiAwO1xuICAgIHRoaXMucGF0aCA9IHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMuaWRdIDogW107XG4gICAgXG4gICAgaWYgKHRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJykpIHtcbiAgICAgIHRoaXMuX2luaXRDaGlsZHJlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlbHBlciBnZXQgZnVuY3Rpb25zOlxuICBnZXQgaGFzQ2hpbGRyZW4oKTpib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5kYXRhLmhhc0NoaWxkcmVuIHx8ICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpO1xuICB9XG4gIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4geyByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCB9XG4gIGdldCBpc0xlYWYoKTpib29sZWFuIHsgcmV0dXJuICF0aGlzLmhhc0NoaWxkcmVuIH1cbiAgZ2V0IGlzUm9vdCgpOmJvb2xlYW4geyByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YS52aXJ0dWFsIH1cbiAgZ2V0IHJlYWxQYXJlbnQoKTpUcmVlTm9kZSB7IHJldHVybiB0aGlzLmlzUm9vdCA/IG51bGwgOiB0aGlzLnBhcmVudCB9XG5cbiAgLy8gcHJveHkgZnVuY3Rpb25zOlxuICBnZXQgb3B0aW9ucygpOiBUcmVlT3B0aW9ucyB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5vcHRpb25zIH1cbiAgZmlyZUV2ZW50KGV2ZW50KSB7IHRoaXMudHJlZU1vZGVsLmZpcmVFdmVudChldmVudCkgfVxuICBnZXQgY29udGV4dCgpOmFueSB7IHJldHVybiB0aGlzLm9wdGlvbnMuY29udGV4dCB9XG5cbiAgLy8gZmllbGQgYWNjZXNzb3JzOlxuICBnZXQgZGlzcGxheUZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZpZWxkKCdkaXNwbGF5Jyk7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQoJ2lkJyk7XG4gIH1cblxuICBzZXQgaWQodmFsdWUpIHtcbiAgICB0aGlzLmRhdGFbJ2lkRmllbGQnXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dO1xuICB9XG5cbiAgc2V0RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dID0gdmFsdWU7XG4gIH1cblxuICAvLyB0cmF2ZXJzaW5nOlxuICBmaW5kQWRqYWNlbnRTaWJsaW5nKHN0ZXBzKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5fZ2V0SW5kZXhJblBhcmVudCgpO1xuICAgIHJldHVybiB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oKVtpbmRleCArIHN0ZXBzXTtcbiAgfVxuXG4gIGZpbmROZXh0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kQWRqYWNlbnRTaWJsaW5nKCsxKTtcbiAgfVxuXG4gIGZpbmRQcmV2aW91c1NpYmxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZEFkamFjZW50U2libGluZygtMSk7XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMuY2hpbGRyZW4gfHwgW10pO1xuICB9XG5cbiAgZ2V0TGFzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmxhc3QodGhpcy5jaGlsZHJlbiB8fCBbXSk7XG4gIH1cblxuICBmaW5kTmV4dE5vZGUoZ29JbnNpZGUgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGdvSW5zaWRlICYmIHRoaXMuaXNFeHBhbmRlZCAmJiB0aGlzLmdldEZpcnN0Q2hpbGQoKSB8fFxuICAgICAgICAgICB0aGlzLmZpbmROZXh0U2libGluZygpIHx8XG4gICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmZpbmROZXh0Tm9kZShmYWxzZSk7XG4gIH1cblxuICBmaW5kUHJldmlvdXNOb2RlKCkge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0aGlzLmZpbmRQcmV2aW91c1NpYmxpbmcoKTtcbiAgICBpZiAoIXByZXZpb3VzU2libGluZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVhbFBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nLl9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoKVxuICB9XG5cbiAgX2dldExhc3RPcGVuRGVzY2VuZGFudCgpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmdldExhc3RDaGlsZCgpO1xuICAgIHJldHVybiAodGhpcy5pc0NvbGxhcHNlZCB8fCAhbGFzdENoaWxkKVxuICAgICAgPyB0aGlzXG4gICAgICA6IGxhc3RDaGlsZC5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRzQ2hpbGRyZW4oKTphbnlbXSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBfLmdldCh0aGlzLCAncGFyZW50LmNoaWxkcmVuJyk7XG5cbiAgICByZXR1cm4gPGFueVtdPmNoaWxkcmVuIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW5kZXhJblBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGFyZW50c0NoaWxkcmVuKCkuaW5kZXhPZih0aGlzKTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RzOlxuICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRyZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9kZSBkb2VzblxcJ3QgaGF2ZSBjaGlsZHJlbiwgb3IgYSBnZXRDaGlsZHJlbiBtZXRob2QnKTtcbiAgICB9XG4gICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMub3B0aW9ucy5nZXRDaGlsZHJlbih0aGlzKSlcbiAgICAgIC50aGVuKChjaGlsZHJlbikgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkKCdjaGlsZHJlbicsIGNoaWxkcmVuKTtcbiAgICAgICAgICB0aGlzLl9pbml0Q2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBfc2V0SXNFeHBhbmRlZCh2YWx1ZSkge1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vblRvZ2dsZSwgbm9kZTogdGhpcywgaXNFeHBhbmRlZDogdGhpcy5pc0V4cGFuZGVkIH0pOyAgICBcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBkZXByZWNhdGVkKCd0b2dnbGUnLCAndG9nZ2xlRXhwYW5kZWQnKTtcbiAgICB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHsgICAgXG4gICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkgeyAgICBcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCgpIHtcbiAgICB0aGlzLnNldElzRXhwYW5kZWQoIXRoaXMuaXNFeHBhbmRlZCk7XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uVG9nZ2xlLCBub2RlOiB0aGlzLCBpc0V4cGFuZGVkOiB0aGlzLmlzRXhwYW5kZWQgfSk7XG4gIH1cblxuICBzZXRJc0V4cGFuZGVkKHZhbHVlKSB7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0RXhwYW5kZWROb2RlKHRoaXMsIHZhbHVlKTtcblxuICAgIGlmICghdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmhhc0NoaWxkcmVuICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbigpO1xuICAgIH1cbiAgfTtcblxuICBzZXRJc0FjdGl2ZSh2YWx1ZSwgbXVsdGkgPSBmYWxzZSkge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEFjdGl2ZU5vZGUodGhpcywgdmFsdWUsIG11bHRpKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkFjdGl2YXRlLCBub2RlOiB0aGlzIH0pO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkRlYWN0aXZhdGUsIG5vZGU6IHRoaXMgfSk7ICAgIFxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUFjdGl2YXRlZChtdWx0aSA9IGZhbHNlKSB7XG4gICAgdGhpcy5zZXRJc0FjdGl2ZSghdGhpcy5pc0FjdGl2ZSwgbXVsdGkpO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkFjdGl2ZUNoYW5nZWQsIG5vZGU6IHRoaXMsIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlIH0pO1xuICB9XG5cbiAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIG5hdGl2ZUVsZW1lbnQuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCAmJiBuYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzZWROb2RlKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25CbHVyLCBub2RlOiBwcmV2aW91c05vZGUgfSk7XG4gICAgfVxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkZvY3VzLCBub2RlOiB0aGlzIH0pO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1c2VkTm9kZShudWxsKTtcbiAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25CbHVyLCBub2RlOiB0aGlzIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvdWJsZUNsaWNrKHJhd0V2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uRG91YmxlQ2xpY2ssIG5vZGU6IHRoaXMsIHJhd0V2ZW50OiByYXdFdmVudCB9KTtcbiAgfVxuXG4gIG1vdXNlQWN0aW9uKGFjdGlvbk5hbWU6c3RyaW5nLCAkZXZlbnQpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh0cnVlKTtcblxuICAgIGNvbnN0IGFjdGlvbk1hcHBpbmcgPVxuICAgICAgJGV2ZW50LnNoaWZ0S2V5ID8gdGhpcy5vcHRpb25zLmFjdGlvbk1hcHBpbmcubW91c2Uuc2hpZnQgOlxuICAgICAgJGV2ZW50LmN0cmxLZXkgPyB0aGlzLm9wdGlvbnMuYWN0aW9uTWFwcGluZy5tb3VzZS5jdHJsIDpcbiAgICAgICRldmVudC5hbHRLZXkgPyB0aGlzLm9wdGlvbnMuYWN0aW9uTWFwcGluZy5tb3VzZS5hbHQgOlxuICAgICAgdGhpcy5vcHRpb25zLmFjdGlvbk1hcHBpbmcubW91c2U7XG5cbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBwaW5nW2FjdGlvbk5hbWVdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhY3Rpb24odGhpcy50cmVlTW9kZWwsIHRoaXMsICRldmVudCk7XG5cbiAgICAgIC8vIFRPRE86IHJlbW92ZSBhZnRlciBkZXByZWNhdGlvbiBvZiBjb250ZXh0IG1lbnVcbiAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnZGJsQ2xpY2snKSB7XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkNvbnRleHRNZW51LCBub2RlOiB0aGlzLCByYXdFdmVudDogJGV2ZW50IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0Q2hpbGRyZW4oKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJylcbiAgICAgIC5tYXAoYyA9PiBuZXcgVHJlZU5vZGUoYywgdGhpcywgdGhpcy50cmVlTW9kZWwpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1dWlkKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDAwMDApO1xufVxuIl19