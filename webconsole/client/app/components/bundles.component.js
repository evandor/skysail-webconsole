System.register(['angular2/core', 'angular2/common', '../services/bundles.service'], function(exports_1, context_1) {
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
    var core_1, common_1, bundles_service_1;
    var BundlesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (bundles_service_1_1) {
                bundles_service_1 = bundles_service_1_1;
            }],
        execute: function() {
            BundlesComponent = (function () {
                function BundlesComponent(_bundleService, _elementRef) {
                    this._bundleService = _bundleService;
                    this._elementRef = _elementRef;
                    this.bundles = [];
                    console.log("in BundlesComponent constructor");
                    // this._bundleService.getBundles()
                    //   .subscribe(res => this.bundles = res);
                    console.log(this.bundles);
                }
                BundlesComponent.prototype.onInit = function () {
                };
                BundlesComponent.prototype.ngOnInit = function () {
                    console.log("oninit bundlesservice called!");
                    // this._bundleService.getBundles()
                    //   .subscribe(res => this.bundles = res);
                    //.subscribe(res => console.log(res));
                    console.log(jQuery(this._elementRef.nativeElement).find('#example'));
                    jQuery(this._elementRef.nativeElement).find('#example').DataTable({
                        "ajax": 'http://localhost:2002/backend/bundles',
                        "columns": [
                            { "data": "id" },
                            { "data": "symbolicName" },
                            { "data": "version" },
                            { "data": "state" }
                        ] /*,
                        "columnDefs": [
                            {
                                "render": function (data, type, row) {
                                    return '<a href="bundles/' + data + '">' + data + '</a>';
                                },
                                "targets": 0
                            }
                        ]*/
                    });
                };
                BundlesComponent = __decorate([
                    core_1.Component({
                        selector: 'bundles',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor, common_1.NgFormModel],
                        providers: [bundles_service_1.BundlesService],
                        templateUrl: 'app/html/bundles.template.html',
                        styleUrls: ['app/css/bundles.css']
                    }), 
                    __metadata('design:paramtypes', [bundles_service_1.BundlesService, core_1.ElementRef])
                ], BundlesComponent);
                return BundlesComponent;
            }());
            exports_1("BundlesComponent", BundlesComponent);
        }
    }
});
//# sourceMappingURL=bundles.component.js.map