System.register(['@angular/core', './tabs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_1;
    var Tab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            }],
        execute: function() {
            Tab = (function () {
                function Tab(tabs) {
                    this.active = this.active || false;
                    this.elementCount = null;
                    this.subtabs = [];
                    tabs.addTab(this);
                }
                Tab.prototype.hasSubtabs = function () {
                    return this.subtabs.length > 0;
                };
                Tab.prototype.addSubTab = function (subtab) {
                    if (this.subtabs.length === 0) {
                    }
                    this.subtabs.push(subtab);
                };
                Tab = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        inputs: [
                            'title:tabTitle',
                            'color:tabColor',
                            'desc:tabDescription',
                            'active'
                        ],
                        styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
                        template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [tabs_1.Tabs])
                ], Tab);
                return Tab;
            }());
            exports_1("Tab", Tab);
        }
    }
});

//# sourceMappingURL=tab.js.map
