import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Bundle} from '../domain/bundle';
import {Service} from '../domain/service';

@Injectable()
export class BackendServices {
   
    private _baseUrl = '';
    
    constructor(private _http: Http) {}

    setBaseUrl(baseUrl) {
        this._baseUrl = baseUrl;    
    }
    
    get(path){
        var headers = new Headers();
        //headers.append('Authorization', 'Basic YWRtaW46c2t5c2FpbA==');
        return this._http.get(this._baseUrl + path, { headers: headers })
            .map(res => res.json());
    }

    getBundles() : Observable<Bundle[]> {
        return this._http.get(this._baseUrl + 'backend/bundles')
            .map(res => res.json());
    }
    
    getBundle(id) : Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/bundles/' + id)
            .map(res => res.json());
    }
    
    getServices() : Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/services')
            .map(res => res.json());
    }

}