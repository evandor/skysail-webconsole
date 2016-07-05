System.register(["@angular/core", "@angular/router", '../services/backend.service'], function(exports_1, context_1) {
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
    var core_1, router_1, backend_service_1;
    var CodeMirrorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (backend_service_1_1) {
                backend_service_1 = backend_service_1_1;
            }],
        execute: function() {
            CodeMirrorComponent = (function () {
                function CodeMirrorComponent(elRef, _backend, _route) {
                    this._backend = _backend;
                    this._route = _route;
                    this.text = "...";
                    this.editorNativeElement = elRef.nativeElement;
                }
                CodeMirrorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        var id = params['id'];
                        var filename = params['file'];
                        _this._backend.getBundleFileContents(id, filename)
                            .subscribe(function (res) {
                            _this.editor.setValue(res.code);
                        });
                    });
                };
                CodeMirrorComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.editor = CodeMirror(this.editorNativeElement, {
                        lineNumbers: true,
                        mode: "text/x-java",
                        readOnly: true
                    });
                    this.editor.on('change', function (editor) {
                        var value = _this.editor.getDoc().getValue();
                        console.log("Value changed!");
                    });
                    this.editor.setSize("100%", "100%");
                };
                CodeMirrorComponent.prototype.ngOnChanges = function (changes) {
                    console.log("on changes");
                };
                CodeMirrorComponent.prototype.updateHeight = function (height) {
                    this.height = height;
                };
                CodeMirrorComponent = __decorate([
                    core_1.Component({
                        selector: 'codemirror',
                        providers: [backend_service_1.BackendServices],
                        templateUrl: "app/html/codemirror.template.html"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, backend_service_1.BackendServices, router_1.ActivatedRoute])
                ], CodeMirrorComponent);
                return CodeMirrorComponent;
            }());
            exports_1("CodeMirrorComponent", CodeMirrorComponent);
        }
    }
});

//# sourceMappingURL=codemirror.component.js.map
