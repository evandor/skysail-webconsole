import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {    
    private _baseUrl = "https://api.github.com/users/";
    
    constructor(private _http: Http){}
    
    getUser(username){
        return this._http.get(this._baseUrl + username)
            .map(res => res.json());
    }
    
    getFollowers(username){
        return this._http.get(this._baseUrl + username + "/followers")
            .map(res => res.json());
    }
}