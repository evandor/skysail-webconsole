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
                    this.children = [];
                    this.toString = function () {
                        var result = "{id: '" + this.id + "', name: '" + this.name + "', ";
                        if (this.isExpanded) {
                            result += "isExpanded: " + this.isExpanded + ", ";
                        }
                        result += "children: [";
                        this.children.forEach(function (child) {
                            result += child.toString();
                        });
                        result += "]}\n";
                        return result;
                    };
                }
                TreeNode.prototype.addChild = function (child) {
                    if (this.children == null) {
                        this.children = [];
                    }
                    this.children.push(child);
                };
                return TreeNode;
            }());
            exports_1("TreeNode", TreeNode);
        }
    }
});

//# sourceMappingURL=treenode.js.map
