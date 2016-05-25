import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*export interface BundlesInterface {
  id: string;
  symbolicName: string;
  version: string;
  status: string;
}*/

@Injectable()
export class BundlesService {

  constructor(private _http: Http) { 
      console.log("bundlesService constructor");
  }

  getBundles() {
      
      var headers = new Headers({
            "access-control-request-method": "POST",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        var options = new RequestOptions({
            headers: headers
        });
        
      return this._http.get('http://localhost:2002/backend/bundles', options)
        // .toRx()
        .map(res => res.json());
  }
}
