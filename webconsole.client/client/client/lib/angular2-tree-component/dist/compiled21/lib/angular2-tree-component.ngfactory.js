/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('../../lib/angular2-tree-component');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import5 = require('@angular/core/src/i18n/tokens');
var import6 = require('../../lib/components/adhoc-component-factory.service');
var import7 = require('@angular/core/src/linker/compiler');
var TreeModuleInjector = (function (_super) {
    __extends(TreeModuleInjector, _super);
    function TreeModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(TreeModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    TreeModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._TreeModule_1 = new import1.TreeModule();
        return this._TreeModule_1;
    };
    TreeModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.TreeModule)) {
            return this._TreeModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    TreeModuleInjector.prototype.destroyInternal = function () {
    };
    return TreeModuleInjector;
}(import0.NgModuleInjector));
exports.TreeModuleNgFactory = new import0.NgModuleFactory(TreeModuleInjector, import1.TreeModule);
var DeprecatedTreeModuleInjector = (function (_super) {
    __extends(DeprecatedTreeModuleInjector, _super);
    function DeprecatedTreeModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(DeprecatedTreeModuleInjector.prototype, "_NgLocalization_3", {
        get: function () {
            if ((this.__NgLocalization_3 == null)) {
                (this.__NgLocalization_3 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeprecatedTreeModuleInjector.prototype, "_AdHocComponentFactoryCreator_4", {
        get: function () {
            if ((this.__AdHocComponentFactoryCreator_4 == null)) {
                (this.__AdHocComponentFactoryCreator_4 = new import6.AdHocComponentFactoryCreator(this.parent.get(import7.Compiler)));
            }
            return this.__AdHocComponentFactoryCreator_4;
        },
        enumerable: true,
        configurable: true
    });
    DeprecatedTreeModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._TreeModule_1 = new import1.TreeModule();
        this._DeprecatedTreeModule_2 = new import1.DeprecatedTreeModule();
        return this._DeprecatedTreeModule_2;
    };
    DeprecatedTreeModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.TreeModule)) {
            return this._TreeModule_1;
        }
        if ((token === import1.DeprecatedTreeModule)) {
            return this._DeprecatedTreeModule_2;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_3;
        }
        if ((token === import6.AdHocComponentFactoryCreator)) {
            return this._AdHocComponentFactoryCreator_4;
        }
        return notFoundResult;
    };
    DeprecatedTreeModuleInjector.prototype.destroyInternal = function () {
    };
    return DeprecatedTreeModuleInjector;
}(import0.NgModuleInjector));
exports.DeprecatedTreeModuleNgFactory = new import0.NgModuleFactory(DeprecatedTreeModuleInjector, import1.DeprecatedTreeModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItdHJlZS1jb21wb25lbnQubmdmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcGlsZWQyMS9saWIvYW5ndWxhcjItdHJlZS1jb21wb25lbnQubmdmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNGLG9CQUFvQjs7Ozs7OztBQUVyQixJQUFZLE9BQU8sV0FBTSw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ3RFLElBQVksT0FBTyxXQUFNLG1DQUFtQyxDQUFDLENBQUE7QUFDN0QsSUFBWSxPQUFPLFdBQU0sbUNBQW1DLENBQUMsQ0FBQTtBQUM3RCxJQUFZLE9BQU8sV0FBTSxrQ0FBa0MsQ0FBQyxDQUFBO0FBRTVELElBQVksT0FBTyxXQUFNLCtCQUErQixDQUFDLENBQUE7QUFDekQsSUFBWSxPQUFPLFdBQU0sc0RBQXNELENBQUMsQ0FBQTtBQUNoRixJQUFZLE9BQU8sV0FBTSxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzdEO0lBQWlDLHNDQUE0QztJQUkzRSw0QkFBWSxNQUF1QjtRQUNqQyxrQkFBTSxNQUFNLEVBQUUsRUFBWSxFQUFFLEVBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxzQkFBSSxpREFBaUI7YUFBckI7WUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSyxJQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDckosTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELDJDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FB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LEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUFDLENBQUM7UUFDMUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztRQUFDLENBQUM7UUFDdEcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsc0RBQWUsR0FBZjtJQUNBLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFqQ0QsQ0FBMkMsT0FBTyxDQUFDLGdCQUFnQixHQWlDbEU7QUFDWSxxQ0FBNkIsR0FBeUQsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBBbmd1bGFyIDIgdGVtcGxhdGUgY29tcGlsZXIuXG4gKiBEbyBub3QgZWRpdC5cbiAqL1xuIC8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIGltcG9ydDAgZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL25nX21vZHVsZV9mYWN0b3J5JztcbmltcG9ydCAqIGFzIGltcG9ydDEgZnJvbSAnLi4vLi4vbGliL2FuZ3VsYXIyLXRyZWUtY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGltcG9ydDIgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL3NyYy9jb21tb25fbW9kdWxlJztcbmltcG9ydCAqIGFzIGltcG9ydDMgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL3NyYy9sb2NhbGl6YXRpb24nO1xuaW1wb3J0ICogYXMgaW1wb3J0NCBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9kaS9pbmplY3Rvcic7XG5pbXBvcnQgKiBhcyBpbXBvcnQ1IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2kxOG4vdG9rZW5zJztcbmltcG9ydCAqIGFzIGltcG9ydDYgZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMvYWRob2MtY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBpbXBvcnQ3IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2xpbmtlci9jb21waWxlcic7XG5jbGFzcyBUcmVlTW9kdWxlSW5qZWN0b3IgZXh0ZW5kcyBpbXBvcnQwLk5nTW9kdWxlSW5qZWN0b3I8aW1wb3J0MS5UcmVlTW9kdWxlPiB7XG4gIF9Db21tb25Nb2R1bGVfMDppbXBvcnQyLkNvbW1vbk1vZHVsZTtcbiAgX1RyZWVNb2R1bGVfMTppbXBvcnQxLlRyZWVNb2R1bGU7XG4gIF9fTmdMb2NhbGl6YXRpb25fMjppbXBvcnQzLk5nTG9jYWxlTG9jYWxpemF0aW9uO1xuICBjb25zdHJ1Y3RvcihwYXJlbnQ6aW1wb3J0NC5JbmplY3Rvcikge1xuICAgIHN1cGVyKHBhcmVudCwoW10gYXMgYW55W10pLChbXSBhcyBhbnlbXSkpO1xuICB9XG4gIGdldCBfTmdMb2NhbGl6YXRpb25fMigpOmltcG9ydDMuTmdMb2NhbGVMb2NhbGl6YXRpb24ge1xuICAgIGlmICgodGhpcy5fX05nTG9jYWxpemF0aW9uXzIgPT0gKG51bGwgYXMgYW55KSkpIHsgKHRoaXMuX19OZ0xvY2FsaXphdGlvbl8yID0gbmV3IGltcG9ydDMuTmdMb2NhbGVMb2NhbGl6YXRpb24odGhpcy5wYXJlbnQuZ2V0KGltcG9ydDUuTE9DQUxFX0lEKSkpOyB9XG4gICAgcmV0dXJuIHRoaXMuX19OZ0xvY2FsaXphdGlvbl8yO1xuICB9XG4gIGNyZWF0ZUludGVybmFsKCk6aW1wb3J0MS5UcmVlTW9kdWxlIHtcbiAgICB0aGlzLl9Db21tb25Nb2R1bGVfMCA9IG5ldyBpbXBvcnQyLkNvbW1vbk1vZHVsZSgpO1xuICAgIHRoaXMuX1RyZWVNb2R1bGVfMSA9IG5ldyBpbXBvcnQxLlRyZWVNb2R1bGUoKTtcbiAgICByZXR1cm4gdGhpcy5fVHJlZU1vZHVsZV8xO1xuICB9XG4gIGdldEludGVybmFsKHRva2VuOmFueSxub3RGb3VuZFJlc3VsdDphbnkpOmFueSB7XG4gICAgaWYgKCh0b2tlbiA9PT0gaW1wb3J0Mi5Db21tb25Nb2R1bGUpKSB7IHJldHVybiB0aGlzLl9Db21tb25Nb2R1bGVfMDsgfVxuICAgIGlmICgodG9rZW4gPT09IGltcG9ydDEuVHJlZU1vZHVsZSkpIHsgcmV0dXJuIHRoaXMuX1RyZWVNb2R1bGVfMTsgfVxuICAgIGlmICgodG9rZW4gPT09IGltcG9ydDMuTmdMb2NhbGl6YXRpb24pKSB7IHJldHVybiB0aGlzLl9OZ0xvY2FsaXphdGlvbl8yOyB9XG4gICAgcmV0dXJuIG5vdEZvdW5kUmVzdWx0O1xuICB9XG4gIGRlc3Ryb3lJbnRlcm5hbCgpOnZvaWQge1xuICB9XG59XG5leHBvcnQgY29uc3QgVHJlZU1vZHVsZU5nRmFjdG9yeTppbXBvcnQwLk5nTW9kdWxlRmFjdG9yeTxpbXBvcnQxLlRyZWVNb2R1bGU+ID0gbmV3IGltcG9ydDAuTmdNb2R1bGVGYWN0b3J5KFRyZWVNb2R1bGVJbmplY3RvcixpbXBvcnQxLlRyZWVNb2R1bGUpO1xuY2xhc3MgRGVwcmVjYXRlZFRyZWVNb2R1bGVJbmplY3RvciBleHRlbmRzIGltcG9ydDAuTmdNb2R1bGVJbmplY3RvcjxpbXBvcnQxLkRlcHJlY2F0ZWRUcmVlTW9kdWxlPiB7XG4gIF9Db21tb25Nb2R1bGVfMDppbXBvcnQyLkNvbW1vbk1vZHVsZTtcbiAgX1RyZWVNb2R1bGVfMTppbXBvcnQxLlRyZWVNb2R1bGU7XG4gIF9EZXByZWNhdGVkVHJlZU1vZHVsZV8yOmltcG9ydDEuRGVwcmVjYXRlZFRyZWVNb2R1bGU7XG4gIF9fTmdMb2NhbGl6YXRpb25fMzppbXBvcnQzLk5nTG9jYWxlTG9jYWxpemF0aW9uO1xuICBfX0FkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3JfNDppbXBvcnQ2LkFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3I7XG4gIGNvbnN0cnVjdG9yKHBhcmVudDppbXBvcnQ0LkluamVjdG9yKSB7XG4gICAgc3VwZXIocGFyZW50LChbXSBhcyBhbnlbXSksKFtdIGFzIGFueVtdKSk7XG4gIH1cbiAgZ2V0IF9OZ0xvY2FsaXphdGlvbl8zKCk6aW1wb3J0My5OZ0xvY2FsZUxvY2FsaXphdGlvbiB7XG4gICAgaWYgKCh0aGlzLl9fTmdMb2NhbGl6YXRpb25fMyA9PSAobnVsbCBhcyBhbnkpKSkgeyAodGhpcy5fX05nTG9jYWxpemF0aW9uXzMgPSBuZXcgaW1wb3J0My5OZ0xvY2FsZUxvY2FsaXphdGlvbih0aGlzLnBhcmVudC5nZXQoaW1wb3J0NS5MT0NBTEVfSUQpKSk7IH1cbiAgICByZXR1cm4gdGhpcy5fX05nTG9jYWxpemF0aW9uXzM7XG4gIH1cbiAgZ2V0IF9BZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yXzQoKTppbXBvcnQ2LkFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3Ige1xuICAgIGlmICgodGhpcy5fX0FkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3JfNCA9PSAobnVsbCBhcyBhbnkpKSkgeyAodGhpcy5fX0FkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3JfNCA9IG5ldyBpbXBvcnQ2LkFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3IodGhpcy5wYXJlbnQuZ2V0KGltcG9ydDcuQ29tcGlsZXIpKSk7IH1cbiAgICByZXR1cm4gdGhpcy5fX0FkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3JfNDtcbiAgfVxuICBjcmVhdGVJbnRlcm5hbCgpOmltcG9ydDEuRGVwcmVjYXRlZFRyZWVNb2R1bGUge1xuICAgIHRoaXMuX0NvbW1vbk1vZHVsZV8wID0gbmV3IGltcG9ydDIuQ29tbW9uTW9kdWxlKCk7XG4gICAgdGhpcy5fVHJlZU1vZHVsZV8xID0gbmV3IGltcG9ydDEuVHJlZU1vZHVsZSgpO1xuICAgIHRoaXMuX0RlcHJlY2F0ZWRUcmVlTW9kdWxlXzIgPSBuZXcgaW1wb3J0MS5EZXByZWNhdGVkVHJlZU1vZHVsZSgpO1xuICAgIHJldHVybiB0aGlzLl9EZXByZWNhdGVkVHJlZU1vZHVsZV8yO1xuICB9XG4gIGdldEludGVybmFsKHRva2VuOmFueSxub3RGb3VuZFJlc3VsdDphbnkpOmFueSB7XG4gICAgaWYgKCh0b2tlbiA9PT0gaW1wb3J0Mi5Db21tb25Nb2R1bGUpKSB7IHJldHVybiB0aGlzLl9Db21tb25Nb2R1bGVfMDsgfVxuICAgIGlmICgodG9rZW4gPT09IGltcG9ydDEuVHJlZU1vZHVsZSkpIHsgcmV0dXJuIHRoaXMuX1RyZWVNb2R1bGVfMTsgfVxuICAgIGlmICgodG9rZW4gPT09IGltcG9ydDEuRGVwcmVjYXRlZFRyZWVNb2R1bGUpKSB7IHJldHVybiB0aGlzLl9EZXByZWNhdGVkVHJlZU1vZHVsZV8yOyB9XG4gICAgaWYgKCh0b2tlbiA9PT0gaW1wb3J0My5OZ0xvY2FsaXphdGlvbikpIHsgcmV0dXJuIHRoaXMuX05nTG9jYWxpemF0aW9uXzM7IH1cbiAgICBpZiAoKHRva2VuID09PSBpbXBvcnQ2LkFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3IpKSB7IHJldHVybiB0aGlzLl9BZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yXzQ7IH1cbiAgICByZXR1cm4gbm90Rm91bmRSZXN1bHQ7XG4gIH1cbiAgZGVzdHJveUludGVybmFsKCk6dm9pZCB7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBEZXByZWNhdGVkVHJlZU1vZHVsZU5nRmFjdG9yeTppbXBvcnQwLk5nTW9kdWxlRmFjdG9yeTxpbXBvcnQxLkRlcHJlY2F0ZWRUcmVlTW9kdWxlPiA9IG5ldyBpbXBvcnQwLk5nTW9kdWxlRmFjdG9yeShEZXByZWNhdGVkVHJlZU1vZHVsZUluamVjdG9yLGltcG9ydDEuRGVwcmVjYXRlZFRyZWVNb2R1bGUpOyJdfQ==