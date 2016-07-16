System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Breadcrumb;
    return {
        setters:[],
        execute: function() {
            Breadcrumb = (function () {
                function Breadcrumb(link, title) {
                    if (title.length > 10 && !title.startsWith('<i')) {
                        this.title = " &gt; " + title.substr(0, 10) + "...";
                    }
                    else {
                        this.title = " &gt; " + title;
                    }
                    this.link = link;
                }
                return Breadcrumb;
            }());
            exports_1("Breadcrumb", Breadcrumb);
        }
    }
});

//# sourceMappingURL=breadcrumb.js.map
