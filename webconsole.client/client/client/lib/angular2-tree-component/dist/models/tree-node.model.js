"use strict";
var events_1 = require('../constants/events');
var deprecated_1 = require('./deprecated');
var _ = require('lodash');
var TreeNode = (function () {
    function TreeNode(data, parent, treeModel) {
        var _this = this;
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.id = this.id || uuid(); // Make sure there's a unique ID
        this.level = this.parent ? this.parent.level + 1 : 0;
        this.path = this.parent ? this.parent.path.concat([this.id]) : [];
        if (this.getField('children')) {
            this.children = this.getField('children')
                .map(function (c) { return new TreeNode(c, _this, treeModel); });
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
                _this.children = children
                    .map(function (child) { return new TreeNode(child, _this, _this.treeModel); });
            }
        });
    };
    TreeNode.prototype.toggle = function () {
        deprecated_1.deprecated('toggle', 'toggleExpanded');
        this.toggleExpanded();
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
    TreeNode.prototype.setIsActive = function (value) {
        this.treeModel.setActiveNode(this, value);
        if (value) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onActivate, node: this });
            this.focus();
        }
        else {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onDeactivate, node: this });
        }
    };
    TreeNode.prototype.toggleActivated = function () {
        this.setIsActive(!this.isActive);
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
    TreeNode.prototype.contextMenu = function (rawEvent) {
        if (this.options.hasCustomContextMenu) {
            rawEvent.preventDefault();
        }
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onContextMenu, node: this, rawEvent: rawEvent });
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW5vZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELDJCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUU1QjtJQWFFLGtCQUFtQixJQUFRLEVBQVMsTUFBZSxFQUFTLFNBQW1CO1FBYmpGLGlCQTZMQztRQWhMb0IsU0FBSSxHQUFKLElBQUksQ0FBSTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQzdFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQztRQUU5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2lCQUN0QyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSSxFQUFFLFNBQVMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFyQkQsc0JBQUksZ0NB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LENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLG9CQUFXLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxRQUFvQjtRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUN0QyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsb0JBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUE3TEQsSUE2TEM7QUE3TFksZ0JBQVEsV0E2THBCLENBQUE7QUFFRDtJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi90cmVlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSVRyZWVOb2RlIH0gZnJvbSAnLi4vZGVmcy9hcGknO1xuaW1wb3J0IHsgVFJFRV9FVkVOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJztcbmltcG9ydCB7IGRlcHJlY2F0ZWQgfSBmcm9tICcuL2RlcHJlY2F0ZWQnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZSBpbXBsZW1lbnRzIElUcmVlTm9kZSB7XG4gIGdldCBpc0V4cGFuZGVkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNFeHBhbmRlZCh0aGlzKSB9O1xuICBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc0FjdGl2ZSh0aGlzKSB9O1xuICBnZXQgaXNGb2N1c2VkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNOb2RlRm9jdXNlZCh0aGlzKSB9O1xuXG4gIGxldmVsOiBudW1iZXI7XG4gIHBhdGg6IHN0cmluZ1tdO1xuICBlbGVtZW50UmVmOkVsZW1lbnRSZWY7XG4gIGNoaWxkcmVuOiBUcmVlTm9kZVtdO1xuXG4gIHByaXZhdGUgX29yaWdpbmFsTm9kZTogYW55O1xuICBnZXQgb3JpZ2luYWxOb2RlKCkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxOb2RlIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6YW55LCBwdWJsaWMgcGFyZW50OlRyZWVOb2RlLCBwdWJsaWMgdHJlZU1vZGVsOlRyZWVNb2RlbCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHV1aWQoKTsgLy8gTWFrZSBzdXJlIHRoZXJlJ3MgYSB1bmlxdWUgSURcbiAgICB0aGlzLmxldmVsID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5sZXZlbCArIDEgOiAwO1xuICAgIHRoaXMucGF0aCA9IHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMuaWRdIDogW107XG4gICAgXG4gICAgaWYgKHRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJykpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpXG4gICAgICAgIC5tYXAoYyA9PiBuZXcgVHJlZU5vZGUoYywgdGhpcywgdHJlZU1vZGVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGVscGVyIGdldCBmdW5jdGlvbnM6XG4gIGdldCBoYXNDaGlsZHJlbigpOmJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmRhdGEuaGFzQ2hpbGRyZW4gfHwgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSk7XG4gIH1cbiAgZ2V0IGlzQ29sbGFwc2VkKCk6Ym9vbGVhbiB7IHJldHVybiAhdGhpcy5pc0V4cGFuZGVkIH1cbiAgZ2V0IGlzTGVhZigpOmJvb2xlYW4geyByZXR1cm4gIXRoaXMuaGFzQ2hpbGRyZW4gfVxuICBnZXQgaXNSb290KCk6Ym9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmVudC5kYXRhLnZpcnR1YWwgfVxuICBnZXQgcmVhbFBhcmVudCgpOlRyZWVOb2RlIHsgcmV0dXJuIHRoaXMuaXNSb290ID8gbnVsbCA6IHRoaXMucGFyZW50IH1cblxuICAvLyBwcm94eSBmdW5jdGlvbnM6XG4gIGdldCBvcHRpb25zKCk6IFRyZWVPcHRpb25zIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLm9wdGlvbnMgfVxuICBmaXJlRXZlbnQoZXZlbnQpIHsgdGhpcy50cmVlTW9kZWwuZmlyZUV2ZW50KGV2ZW50KSB9XG4gIGdldCBjb250ZXh0KCk6YW55IHsgcmV0dXJuIHRoaXMub3B0aW9ucy5jb250ZXh0IH1cblxuICAvLyBmaWVsZCBhY2Nlc3NvcnM6XG4gIGdldCBkaXNwbGF5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQoJ2Rpc3BsYXknKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaWVsZCgnaWQnKTtcbiAgfVxuXG4gIHNldCBpZCh2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVsnaWRGaWVsZCddID0gdmFsdWU7XG4gIH1cblxuICBnZXRGaWVsZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMub3B0aW9uc1tgJHtrZXl9RmllbGRgXV07XG4gIH1cblxuICAvLyB0cmF2ZXJzaW5nOlxuICBmaW5kQWRqYWNlbnRTaWJsaW5nKHN0ZXBzKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5fZ2V0SW5kZXhJblBhcmVudCgpO1xuICAgIHJldHVybiB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oKVtpbmRleCArIHN0ZXBzXTtcbiAgfVxuXG4gIGZpbmROZXh0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kQWRqYWNlbnRTaWJsaW5nKCsxKTtcbiAgfVxuXG4gIGZpbmRQcmV2aW91c1NpYmxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZEFkamFjZW50U2libGluZygtMSk7XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMuY2hpbGRyZW4gfHwgW10pO1xuICB9XG5cbiAgZ2V0TGFzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmxhc3QodGhpcy5jaGlsZHJlbiB8fCBbXSk7XG4gIH1cblxuICBmaW5kTmV4dE5vZGUoZ29JbnNpZGUgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGdvSW5zaWRlICYmIHRoaXMuaXNFeHBhbmRlZCAmJiB0aGlzLmdldEZpcnN0Q2hpbGQoKSB8fFxuICAgICAgICAgICB0aGlzLmZpbmROZXh0U2libGluZygpIHx8XG4gICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmZpbmROZXh0Tm9kZShmYWxzZSk7XG4gIH1cblxuICBmaW5kUHJldmlvdXNOb2RlKCkge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0aGlzLmZpbmRQcmV2aW91c1NpYmxpbmcoKTtcbiAgICBpZiAoIXByZXZpb3VzU2libGluZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVhbFBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nLl9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoKVxuICB9XG5cbiAgX2dldExhc3RPcGVuRGVzY2VuZGFudCgpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmdldExhc3RDaGlsZCgpO1xuICAgIHJldHVybiAodGhpcy5pc0NvbGxhcHNlZCB8fCAhbGFzdENoaWxkKVxuICAgICAgPyB0aGlzXG4gICAgICA6IGxhc3RDaGlsZC5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRzQ2hpbGRyZW4oKTphbnlbXSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBfLmdldCh0aGlzLCAncGFyZW50LmNoaWxkcmVuJyk7XG5cbiAgICByZXR1cm4gPGFueVtdPmNoaWxkcmVuIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW5kZXhJblBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGFyZW50c0NoaWxkcmVuKCkuaW5kZXhPZih0aGlzKTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RzOlxuICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRyZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9kZSBkb2VzblxcJ3QgaGF2ZSBjaGlsZHJlbiwgb3IgYSBnZXRDaGlsZHJlbiBtZXRob2QnKTtcbiAgICB9XG4gICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMub3B0aW9ucy5nZXRDaGlsZHJlbih0aGlzKSlcbiAgICAgIC50aGVuKChjaGlsZHJlbikgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHsgICAgICAgIFxuICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlblxuICAgICAgICAgICAgLm1hcCgoY2hpbGQpID0+IG5ldyBUcmVlTm9kZShjaGlsZCwgdGhpcywgdGhpcy50cmVlTW9kZWwpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgZGVwcmVjYXRlZCgndG9nZ2xlJywgJ3RvZ2dsZUV4cGFuZGVkJyk7XG4gICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgdGhpcy5zZXRJc0V4cGFuZGVkKCF0aGlzLmlzRXhwYW5kZWQpO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vblRvZ2dsZSwgbm9kZTogdGhpcywgaXNFeHBhbmRlZDogdGhpcy5pc0V4cGFuZGVkIH0pO1xuICB9XG5cbiAgc2V0SXNFeHBhbmRlZCh2YWx1ZSkge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEV4cGFuZGVkTm9kZSh0aGlzLCB2YWx1ZSk7XG5cbiAgICBpZiAoIXRoaXMuY2hpbGRyZW4gJiYgdGhpcy5oYXNDaGlsZHJlbiAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0SXNBY3RpdmUodmFsdWUpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRBY3RpdmVOb2RlKHRoaXMsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkFjdGl2YXRlLCBub2RlOiB0aGlzIH0pO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkRlYWN0aXZhdGUsIG5vZGU6IHRoaXMgfSk7ICAgIFxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLnNldElzQWN0aXZlKCF0aGlzLmlzQWN0aXZlKTtcbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25BY3RpdmVDaGFuZ2VkLCBub2RlOiB0aGlzLCBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSB9KTtcbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3SWZOZWVkZWQgJiYgbmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1c2VkTm9kZSh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgaWYgKHByZXZpb3VzTm9kZSkge1xuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uQmx1ciwgbm9kZTogcHJldmlvdXNOb2RlIH0pO1xuICAgIH1cbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Gb2N1cywgbm9kZTogdGhpcyB9KTtcbiAgfVxuXG4gIGJsdXIoKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMudHJlZU1vZGVsLmdldEZvY3VzZWROb2RlKCk7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXNlZE5vZGUobnVsbCk7XG4gICAgaWYgKHByZXZpb3VzTm9kZSkge1xuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uQmx1ciwgbm9kZTogdGhpcyB9KTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVDbGljayhyYXdFdmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkRvdWJsZUNsaWNrLCBub2RlOiB0aGlzLCByYXdFdmVudDogcmF3RXZlbnQgfSk7XG4gIH1cblxuICBjb250ZXh0TWVudShyYXdFdmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFzQ3VzdG9tQ29udGV4dE1lbnUpIHtcbiAgICAgIHJhd0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkNvbnRleHRNZW51LCBub2RlOiB0aGlzLCByYXdFdmVudDogcmF3RXZlbnQgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXVpZCgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMDAwKTtcbn1cbiJdfQ==