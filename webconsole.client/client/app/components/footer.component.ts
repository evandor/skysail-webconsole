import {Component, OnInit} from 'angular2/core'
import {BackendServices} from '../services/backend.service';

@Component({
    selector: 'footer',
    providers: [BackendServices],
    template: '<p><small>client: {{version}}</small></p>'
})
export class FooterComponent implements OnInit {

    version;
    
    constructor(private _backend: BackendServices) {
        _backend.setBaseUrl('http://localhost:2002/');
    }
    
    ngOnInit() {
        this._backend.getVersion()
            .subscribe(res => this.version = res);
    }
}