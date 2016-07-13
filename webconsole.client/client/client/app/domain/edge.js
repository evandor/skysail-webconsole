System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Edge;
    return {
        setters:[],
        execute: function() {
            Edge = (function () {
                function Edge(source, target, weight) {
                    this.source = source;
                    this.target = target;
                    this.weight = weight;
                }
                return Edge;
            }());
            exports_1("Edge", Edge);
        }
    }
});

//# sourceMappingURL=edge.js.map
