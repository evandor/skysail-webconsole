System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Node;
    return {
        setters:[],
        execute: function() {
            Node = (function () {
                function Node(id, name, followers, following) {
                    this.id = id;
                    this.name = name;
                    this.followers = followers;
                    this.following = following;
                }
                return Node;
            }());
            exports_1("Node", Node);
        }
    }
});

//# sourceMappingURL=node.js.map
