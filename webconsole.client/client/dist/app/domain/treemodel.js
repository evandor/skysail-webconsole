System.register(['../domain/treenode'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var treenode_1;
    var TreeModel;
    return {
        setters:[
            function (treenode_1_1) {
                treenode_1 = treenode_1_1;
            }],
        execute: function() {
            TreeModel = (function () {
                function TreeModel() {
                    this.root = new treenode_1.TreeNode(null, null);
                }
                TreeModel.prototype.getParent = function (path) {
                    var parentId = path.split(".").slice(0, -1).join('.');
                    return this.checkNodes(this.root.children, parentId);
                };
                TreeModel.prototype.checkNodes = function (subroots, id) {
                    for (var i = 0; i < subroots.length; i++) {
                        if (subroots[i].id == id) {
                            return subroots[i];
                        }
                    }
                    for (var i = 0; i < subroots.length; i++) {
                        var found = this.checkNodes(subroots[i].children, id);
                        if (found != null) {
                            return found;
                        }
                    }
                    return null;
                };
                return TreeModel;
            }());
            exports_1("TreeModel", TreeModel);
        }
    }
});

//# sourceMappingURL=treemodel.js.map
