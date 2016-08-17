System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BackendConfig;
    return {
        setters:[],
        execute: function() {
            BackendConfig = (function () {
                function BackendConfig(username, password, endpoint) {
                    this.username = username;
                    this.password = password;
                    this.endpoint = endpoint;
                }
                return BackendConfig;
            }());
            exports_1("BackendConfig", BackendConfig);
        }
    }
});

//# sourceMappingURL=backendconfig.js.map
