System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ServicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ServicesComponent = (function () {
                function ServicesComponent(_elementRef) {
                    this._elementRef = _elementRef;
                    this.bundles = [];
                    console.log("in ServicesComponent constructor");
                }
                ServicesComponent.prototype.onInit = function () {
                };
                ServicesComponent.prototype.ngOnInit = function () {
                    console.log("oninit services called!");
                    console.log(jQuery(this._elementRef.nativeElement).find('#example'));
                    jQuery(this._elementRef.nativeElement).find('#services').DataTable({
                        "lengthMenu": [[25, 50, -1], [25, 50, "All"]],
                        "ajax": 'http://localhost:2002/backend/services',
                        "columns": [
                            { "data": "id" },
                            { "data": "objectClass" },
                            { "data": "pid" },
                            { "data": "ranking" }
                        ],
                        "columnDefs": [
                            {
                                "render": function (data, type, row) {
                                    return '<a href="bundles/' + data + '">' + data + '</a>';
                                },
                                "targets": 1
                            }
                        ]
                    });
                };
                ServicesComponent = __decorate([
                    core_1.Component({
                        selector: 'services',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        //providers: [BundlesService],
                        templateUrl: 'app/html/services.template.html',
                        styleUrls: ['app/js/datatables.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ServicesComponent);
                return ServicesComponent;
            }());
            exports_1("ServicesComponent", ServicesComponent);
        }
    }
});
//# sourceMappingURL=services.component.js.map