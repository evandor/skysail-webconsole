import {Component, OnInit} from '@angular/core'
import {BackendServices} from '../services/backend.service';

@Component({
    selector: 'footer',
    providers: [BackendServices],
    template: '<p><small>client: {{version}}</small></p>'
})
export class FooterComponent implements OnInit {

    version;
    
    constructor(private _backend: BackendServices, private _window: Window) {
        _backend.setBaseUrl('http://localhost:2002/');
    }
    
    ngOnInit() {
        var port = this._window.location.port;
        if (port == "2002") {
            this._backend.getVersion()
            .subscribe(res => this.version = res);
        } else {
            this.version = "latest";
        }
    }
}