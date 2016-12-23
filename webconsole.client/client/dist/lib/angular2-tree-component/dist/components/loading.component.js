"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], LoadingComponent.prototype, "loadingTemplate", void 0);
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'LoadingComponent',
            template: "<span *ngIf=\"!loadingTemplate\">loading...</span>\n  <template [ngTemplateOutlet]=\"loadingTemplate\"></template>",
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQzlDLENBQUMsQ0FENEQ7QUFRN0Q7SUFBQTtJQUVBLENBQUM7SUFEQztRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFOVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxvSEFDaUQ7U0FDNUQsQ0FBQzs7d0JBQUE7SUFHRix1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdMb2FkaW5nQ29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nVGVtcGxhdGVcIj5sb2FkaW5nLi4uPC9zcGFuPlxuICA8dGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCI+PC90ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9hZGluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIl19