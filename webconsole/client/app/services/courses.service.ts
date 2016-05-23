import {Injectable} from 'angular2/core'
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CoursesService {

    private _baseUrl = "http://admin:skysail@85.25.22.126:8391/demoapp/v1/Timetables/16:0/?media=json";

    constructor(private _http: Http) { }
    
    getCourses(){
        var headers = new Headers({
            "access-control-request-method": "POST"
        });

        var options = new RequestOptions({
            headers: headers
        });
        
        return this._http.get(this._baseUrl, options)
            .map(res => res.json());
    }

}