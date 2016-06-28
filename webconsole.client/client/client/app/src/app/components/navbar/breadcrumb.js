System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Breadcrumb;
    return {
        setters:[],
        execute: function() {
            Breadcrumb = (function () {
                function Breadcrumb(link, title) {
                    this.title = title;
                    this.link = link;
                }
                return Breadcrumb;
            }());
            exports_1("Breadcrumb", Breadcrumb);
        }
    }
});

//# sourceMappingURL=breadcrumb.js.map
