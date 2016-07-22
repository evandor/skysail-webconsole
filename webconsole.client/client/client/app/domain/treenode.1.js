System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TreeNode;
    return {
        setters:[],
        execute: function() {
            TreeNode = (function () {
                function TreeNode(id, // a path like 'ch.qos.logback.classic'
                    name // typically the last part of the path
                    ) {
                    this.id = id;
                    this.name = name;
                    this.isExpanded = false;
                    this.toString = function () {
                        return "{name: '" + this.name + "', isExpanded: " + this.isExpanded + "}";
                    };
                }
                TreeNode.prototype.addChild = function (child) {
                    if (this.children == null) {
                        this.children = [];
                    }
                    this.children.push(child);
                };
                TreeNode.prototype.getChild = function (name) {
                    var result;
                    this.children.forEach(function (child) {
                        if (child.name == name) {
                            return child;
                        }
                    });
                    return result;
                };
                return TreeNode;
            }());
            exports_1("TreeNode", TreeNode);
        }
    }
});

//# sourceMappingURL=treenode.1.js.map
