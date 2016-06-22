import {Injectable, EventEmitter} from "@angular/core";
import {WindowService} from './window.service';
import {Http, Headers} from '@angular/http'

@Injectable()
export class ConfigService {

    host:string;
    port:string;

    constructor(private windows:WindowService, private http:Http) {
        http.get('config.json')
            .map(res => res.json())
            .subscribe((config:any) => {
                this.host = config.host;
                this.port = config.port;
            })
    }


}

