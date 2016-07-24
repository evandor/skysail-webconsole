import {Injectable, EventEmitter} from "@angular/core";
import {WindowService} from './window.service';
import {Http, Headers} from '@angular/http'

@Injectable()
export class ConfigService {

    host:string = location.hostname;
    port:string = "2002";

    constructor(private windows:WindowService, private http:Http) {
        this.host = location.hostname;
        // does not make sense to define host and port here...
        /*http.get('config.json')
            .map(res => res.json())
            .subscribe((config:any) => {
                this.host = config.host;
                this.port = config.port;
            })*/
    }


}

