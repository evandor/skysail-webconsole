System.register(['../domain/bundle'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bundle_1;
    var Service;
    return {
        setters:[
            function (bundle_1_1) {
                bundle_1 = bundle_1_1;
            }],
        execute: function() {
            Service = (function () {
                function Service() {
                    this.bundle = new bundle_1.Bundle();
                    this.properties = new Map();
                }
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map