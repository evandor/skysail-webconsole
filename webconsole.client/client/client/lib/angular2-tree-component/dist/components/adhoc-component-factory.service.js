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
var common_1 = require('@angular/common');
var AdHocComponentFactoryCreator = (function () {
    function AdHocComponentFactoryCreator(compiler) {
        this.compiler = compiler;
        this.factories = [];
    }
    AdHocComponentFactoryCreator.prototype.getFactory = function (component) {
        var factory = this.factories.find(function (factory) { return factory.componentType === component; });
        if (!factory) {
            factory = this._createAdHocComponentFactory(component);
        }
        return factory;
    };
    AdHocComponentFactoryCreator.prototype._createAdHocComponentFactory = function (component) {
        var AdHocModule = (function () {
            function AdHocModule() {
            }
            AdHocModule = __decorate([
                core_1.NgModule({
                    declarations: [component],
                    entryComponents: [component],
                    imports: [common_1.CommonModule],
                }), 
                __metadata('design:paramtypes', [])
            ], AdHocModule);
            return AdHocModule;
        }());
        var factory = this.compiler.compileModuleAndAllComponentsSync(AdHocModule).componentFactories
            .find(function (factory) { return factory.componentType === component; });
        this.factories.push(factory);
        return factory;
    };
    AdHocComponentFactoryCreator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Compiler])
    ], AdHocComponentFactoryCreator);
    return AdHocComponentFactoryCreator;
}());
exports.AdHocComponentFactoryCreator = AdHocComponentFactoryCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRob2MtY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL2FkaG9jLWNvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRSxlQUFlLENBQUMsQ0FBQTtBQUNqRix1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQztJQUdFLHNDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRnRDLGNBQVMsR0FBNEIsRUFBRSxDQUFDO0lBR3hDLENBQUM7SUFFRCxpREFBVSxHQUFWLFVBQVcsU0FBYztRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsbUVBQTRCLEdBQTVCLFVBQTZCLFNBQWM7UUFNekM7WUFBQTtZQUFtQixDQUFDO1lBTHBCO2dCQUFDLGVBQVEsQ0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztpQkFDeEIsQ0FBQzs7MkJBQUE7WUFDaUIsa0JBQUM7UUFBRCxDQUFDLEFBQXBCLElBQW9CO1FBQ3BCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsV0FBVyxDQUFDLENBQUMsa0JBQWtCO2FBQzFGLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBMUJIO1FBQUMsaUJBQVUsRUFBRTs7b0NBQUE7SUEyQmIsbUNBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLG9DQUE0QiwrQkEwQnhDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ01vZHVsZSwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yIHtcbiAgZmFjdG9yaWVzOiBDb21wb25lbnRGYWN0b3J5PGFueT5bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gIH1cblxuICBnZXRGYWN0b3J5KGNvbXBvbmVudDogYW55KTogQ29tcG9uZW50RmFjdG9yeTxhbnk+IHtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMuZmFjdG9yaWVzLmZpbmQoZmFjdG9yeSA9PiBmYWN0b3J5LmNvbXBvbmVudFR5cGUgPT09IGNvbXBvbmVudCk7XG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICBmYWN0b3J5ID0gdGhpcy5fY3JlYXRlQWRIb2NDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHJldHVybiBmYWN0b3J5O1xuICB9XG5cbiAgX2NyZWF0ZUFkSG9jQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQ6IGFueSk6IENvbXBvbmVudEZhY3Rvcnk8YW55PiB7XG4gICAgQE5nTW9kdWxlKHtcbiAgICAgIGRlY2xhcmF0aW9uczogW2NvbXBvbmVudF0sXG4gICAgICBlbnRyeUNvbXBvbmVudHM6IFtjb21wb25lbnRdLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgfSlcbiAgICBjbGFzcyBBZEhvY01vZHVsZSB7fVxuICAgIGxldCBmYWN0b3J5ID0gdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMoQWRIb2NNb2R1bGUpLmNvbXBvbmVudEZhY3Rvcmllc1xuICAgICAgLmZpbmQoZmFjdG9yeSA9PiBmYWN0b3J5LmNvbXBvbmVudFR5cGUgPT09IGNvbXBvbmVudCk7XG4gICAgdGhpcy5mYWN0b3JpZXMucHVzaChmYWN0b3J5KTtcbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxufSJdfQ==