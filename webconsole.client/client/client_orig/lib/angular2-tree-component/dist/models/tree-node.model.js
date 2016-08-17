"use strict";
var events_1 = require('../constants/events');
var _ = require('lodash');
var TreeNode = (function () {
    function TreeNode(data, parent, treeModel) {
        var _this = this;
        if (parent === void 0) { parent = null; }
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this._isExpanded = false;
        this._isActive = false;
        this.level = this.parent ? this.parent.level + 1 : 0;
        this.path = this.parent ? this.parent.path.concat([this.id]) : [];
        if (this.getField('expanded'))
            this.isExpanded = true;
        if (this.getField('children')) {
            this.children = this.getField('children')
                .map(function (c) { return new TreeNode(c, _this, treeModel); });
        }
    }
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this._isExpanded; },
        set: function (value) {
            this._isExpanded = value;
            if (!this.getField('children') && this.hasChildren && value) {
                this.loadChildren();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this._isActive; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.focusedNode == this; },
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
            return !!(this.data.hasChildren || (this.getField('children') && this.getField('children').length > 0));
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
            _this.children = children
                .map(function (child) { return new TreeNode(child, _this, _this.treeModel); });
        });
    };
    TreeNode.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onToggle, node: this, isExpanded: this.isExpanded });
    };
    TreeNode.prototype._activate = function () {
        this._isActive = true;
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onActivate, node: this });
        this.focus();
    };
    TreeNode.prototype._deactivate = function () {
        this._isActive = false;
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onDeactivate, node: this });
    };
    TreeNode.prototype.toggleActivated = function () {
        if (this.isActive) {
            this._deactivate();
            this.treeModel.activeNode = null;
        }
        else {
            if (this.treeModel.activeNode) {
                this.treeModel.activeNode._deactivate();
            }
            this._activate();
            this.treeModel.activeNode = this;
        }
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onActiveChanged, node: this, isActive: this.isActive });
    };
    TreeNode.prototype.scrollIntoView = function () {
        var nativeElement = this.elementRef.nativeElement;
        nativeElement.scrollIntoViewIfNeeded && nativeElement.scrollIntoViewIfNeeded();
    };
    TreeNode.prototype.focus = function () {
        var previousNode = this.treeModel.focusedNode;
        this.treeModel.focusedNode = this;
        this.scrollIntoView();
        if (previousNode) {
            this.fireEvent({ eventName: events_1.TREE_EVENTS.onBlur, node: previousNode });
        }
        this.fireEvent({ eventName: events_1.TREE_EVENTS.onFocus, node: this });
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.focusedNode;
        this.treeModel.focusedNode = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW5vZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLHVCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBRWxELElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRTVCO0lBc0JFLGtCQUFtQixJQUFRLEVBQVMsTUFBc0IsRUFBUyxTQUFtQjtRQXRCeEYsaUJBNkxDO1FBdks4QixzQkFBNkIsR0FBN0IsYUFBNkI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBSTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQXJCOUUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFTN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWFqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQztRQUU5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztpQkFDdEMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUks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O0lBRUQsOEJBQVcsR0FBWCxVQUFZLFFBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsb0JBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLFFBQW9CO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxvQkFBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTdMRCxJQTZMQztBQTdMWSxnQkFBUSxXQTZMcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4vdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4vdHJlZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IElUcmVlTm9kZSB9IGZyb20gJy4uL2RlZnMvYXBpJztcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIGltcGxlbWVudHMgSVRyZWVOb2RlIHtcbiAgcHJpdmF0ZSBfaXNFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgaXNFeHBhbmRlZCgpIHsgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQgfTtcbiAgc2V0IGlzRXhwYW5kZWQodmFsdWUpIHtcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gdmFsdWVcbiAgICBpZiAoIXRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJykgJiYgdGhpcy5oYXNDaGlsZHJlbiAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGlzQWN0aXZlKCkgeyByZXR1cm4gdGhpcy5faXNBY3RpdmUgfTtcblxuICBnZXQgaXNGb2N1c2VkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGUgPT0gdGhpcyB9O1xuICBjaGlsZHJlbjogVHJlZU5vZGVbXTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgcGF0aDogc3RyaW5nW107XG4gIGVsZW1lbnRSZWY6RWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9vcmlnaW5hbE5vZGU6IGFueTtcbiAgZ2V0IG9yaWdpbmFsTm9kZSgpIHsgcmV0dXJuIHRoaXMuX29yaWdpbmFsTm9kZSB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOmFueSwgcHVibGljIHBhcmVudDpUcmVlTm9kZSA9IG51bGwsIHB1YmxpYyB0cmVlTW9kZWw6VHJlZU1vZGVsKSB7XG4gICAgdGhpcy5sZXZlbCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubGV2ZWwgKyAxIDogMDtcbiAgICB0aGlzLnBhdGggPSB0aGlzLnBhcmVudCA/IFsuLi50aGlzLnBhcmVudC5wYXRoLCB0aGlzLmlkXSA6IFtdO1xuICAgIFxuICAgIGlmICh0aGlzLmdldEZpZWxkKCdleHBhbmRlZCcpKSB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5nZXRGaWVsZCgnY2hpbGRyZW4nKVxuICAgICAgICAubWFwKGMgPT4gbmV3IFRyZWVOb2RlKGMsIHRoaXMsIHRyZWVNb2RlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlbHBlciBnZXQgZnVuY3Rpb25zOlxuICBnZXQgaGFzQ2hpbGRyZW4oKTpib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5kYXRhLmhhc0NoaWxkcmVuIHx8ICh0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpICYmIHRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJykubGVuZ3RoID4gMCkpO1xuICB9XG4gIGdldCBpc0NvbGxhcHNlZCgpOmJvb2xlYW4geyByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCB9XG4gIGdldCBpc0xlYWYoKTpib29sZWFuIHsgcmV0dXJuICF0aGlzLmhhc0NoaWxkcmVuIH1cbiAgZ2V0IGlzUm9vdCgpOmJvb2xlYW4geyByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YS52aXJ0dWFsIH1cbiAgZ2V0IHJlYWxQYXJlbnQoKTpUcmVlTm9kZSB7IHJldHVybiB0aGlzLmlzUm9vdCA/IG51bGwgOiB0aGlzLnBhcmVudCB9XG5cbiAgLy8gcHJveHkgZnVuY3Rpb25zOlxuICBnZXQgb3B0aW9ucygpOiBUcmVlT3B0aW9ucyB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5vcHRpb25zIH1cbiAgZmlyZUV2ZW50KGV2ZW50KSB7IHRoaXMudHJlZU1vZGVsLmZpcmVFdmVudChldmVudCkgfVxuICBnZXQgY29udGV4dCgpOmFueSB7IHJldHVybiB0aGlzLm9wdGlvbnMuY29udGV4dCB9XG5cbiAgLy8gZmllbGQgYWNjZXNzb3JzOlxuICBnZXQgZGlzcGxheUZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZpZWxkKCdkaXNwbGF5Jyk7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQoJ2lkJyk7XG4gIH1cblxuICBnZXRGaWVsZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMub3B0aW9uc1tgJHtrZXl9RmllbGRgXV07XG4gIH1cblxuICAvLyB0cmF2ZXJzaW5nOlxuICBmaW5kQWRqYWNlbnRTaWJsaW5nKHN0ZXBzKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5fZ2V0SW5kZXhJblBhcmVudCgpO1xuICAgIHJldHVybiB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oKVtpbmRleCArIHN0ZXBzXTtcbiAgfVxuXG4gIGZpbmROZXh0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kQWRqYWNlbnRTaWJsaW5nKCsxKTtcbiAgfVxuXG4gIGZpbmRQcmV2aW91c1NpYmxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZEFkamFjZW50U2libGluZygtMSk7XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMuY2hpbGRyZW4gfHwgW10pO1xuICB9XG5cbiAgZ2V0TGFzdENoaWxkKCkge1xuICAgIHJldHVybiBfLmxhc3QodGhpcy5jaGlsZHJlbiB8fCBbXSk7XG4gIH1cblxuICBmaW5kTmV4dE5vZGUoZ29JbnNpZGUgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGdvSW5zaWRlICYmIHRoaXMuaXNFeHBhbmRlZCAmJiB0aGlzLmdldEZpcnN0Q2hpbGQoKSB8fFxuICAgICAgICAgICB0aGlzLmZpbmROZXh0U2libGluZygpIHx8XG4gICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmZpbmROZXh0Tm9kZShmYWxzZSk7XG4gIH1cblxuICBmaW5kUHJldmlvdXNOb2RlKCkge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0aGlzLmZpbmRQcmV2aW91c1NpYmxpbmcoKTtcbiAgICBpZiAoIXByZXZpb3VzU2libGluZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVhbFBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nLl9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoKVxuICB9XG5cbiAgX2dldExhc3RPcGVuRGVzY2VuZGFudCgpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmdldExhc3RDaGlsZCgpO1xuICAgIHJldHVybiAodGhpcy5pc0NvbGxhcHNlZCB8fCAhbGFzdENoaWxkKVxuICAgICAgPyB0aGlzXG4gICAgICA6IGxhc3RDaGlsZC5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRzQ2hpbGRyZW4oKTphbnlbXSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBfLmdldCh0aGlzLCAncGFyZW50LmNoaWxkcmVuJyk7XG5cbiAgICByZXR1cm4gPGFueVtdPmNoaWxkcmVuIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW5kZXhJblBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGFyZW50c0NoaWxkcmVuKCkuaW5kZXhPZih0aGlzKTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RzOlxuICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRyZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9kZSBkb2VzblxcJ3QgaGF2ZSBjaGlsZHJlbiwgb3IgYSBnZXRDaGlsZHJlbiBtZXRob2QnKTtcbiAgICB9XG4gICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMub3B0aW9ucy5nZXRDaGlsZHJlbih0aGlzKSlcbiAgICAgIC50aGVuKChjaGlsZHJlbikgPT4ge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW5cbiAgICAgICAgICAubWFwKChjaGlsZCkgPT4gbmV3IFRyZWVOb2RlKGNoaWxkLCB0aGlzLCB0aGlzLnRyZWVNb2RlbCkpO1xuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Ub2dnbGUsIG5vZGU6IHRoaXMsIGlzRXhwYW5kZWQ6IHRoaXMuaXNFeHBhbmRlZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2YXRlKCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25BY3RpdmF0ZSwgbm9kZTogdGhpcyB9KTtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uRGVhY3RpdmF0ZSwgbm9kZTogdGhpcyB9KTtcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2YXRlZCgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy50cmVlTW9kZWwuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMudHJlZU1vZGVsLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgdGhpcy50cmVlTW9kZWwuYWN0aXZlTm9kZS5fZGVhY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWN0aXZhdGUoKTtcbiAgICAgIHRoaXMudHJlZU1vZGVsLmFjdGl2ZU5vZGUgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25BY3RpdmVDaGFuZ2VkLCBub2RlOiB0aGlzLCBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSB9KTtcbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3SWZOZWVkZWQgJiYgbmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGU7XG4gICAgdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGUgPSB0aGlzO1xuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25CbHVyLCBub2RlOiBwcmV2aW91c05vZGUgfSk7XG4gICAgfVxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkZvY3VzLCBub2RlOiB0aGlzIH0pO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGU7XG4gICAgdGhpcy50cmVlTW9kZWwuZm9jdXNlZE5vZGUgPSBudWxsO1xuICAgIGlmIChwcmV2aW91c05vZGUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkJsdXIsIG5vZGU6IHRoaXMgfSk7XG4gICAgfVxuICB9XG5cbiAgZG91YmxlQ2xpY2socmF3RXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Eb3VibGVDbGljaywgbm9kZTogdGhpcywgcmF3RXZlbnQ6IHJhd0V2ZW50IH0pO1xuICB9XG5cbiAgY29udGV4dE1lbnUocmF3RXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhhc0N1c3RvbUNvbnRleHRNZW51KSB7XG4gICAgICByYXdFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Db250ZXh0TWVudSwgbm9kZTogdGhpcywgcmF3RXZlbnQ6IHJhd0V2ZW50IH0pO1xuICB9XG59XG4iXX0=