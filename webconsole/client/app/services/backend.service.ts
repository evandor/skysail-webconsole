import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendServices {
   
    private _baseUrl = '';
    
    constructor(private _http: Http) {}

    setBaseUrl(baseUrl) {
        this._baseUrl = baseUrl;    
    }
    
    get(path){
        
        /*var headers = new Headers({
            "access-control-request-method": "POST"
        });

        var options = new RequestOptions({
            headers: headers
        });*/
        
        var headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46c2t5c2FpbA==');
        return this._http.get(this._baseUrl + path, { headers: headers })
            .map(res => res.json());
    }

}