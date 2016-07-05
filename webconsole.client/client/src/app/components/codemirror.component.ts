import {Component, OnInit, ElementRef, OnChanges, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";

import {BackendServices} from '../services/backend.service';

@Component({
    selector: 'codemirror',
    providers: [BackendServices],
    templateUrl: "app/html/codemirror.template.html"
})
export class CodeMirrorComponent implements OnInit,OnChanges, AfterViewInit {

    sub: any;

    text: string = "...";

    height:number;
    editor:any;
    editorNativeElement:any;

    constructor(elRef:ElementRef, 
        private _backend: BackendServices, 
        private _route: ActivatedRoute) {
        this.editorNativeElement = elRef.nativeElement;
    }

    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            let filename = params['file'];

            this._backend.getBundleFileContents(id, filename)
                .subscribe(res => {
                    this.editor.setValue(res.code);
                });
        });
    }

    ngAfterViewInit() {
       this.editor = CodeMirror(this.editorNativeElement, {
          lineNumbers: true,
          mode:"text/x-java",
          readOnly: true
        });

        this.editor.on('change', (editor:CodeMirror.Editor) => {
            var value = this.editor.getDoc().getValue();
            console.log("Value changed!");
        });
        this.editor.setSize("100%", "100%");
    }

    ngOnChanges(changes:{}) {
        console.log("on changes");
    }

    updateHeight(height:number) {
        this.height = height;
    }
}