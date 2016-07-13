import {Injectable, OnInit} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage';
import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';
import {Snapshot} from '../domain/snapshot';

import {ConfigService} from '../services/config.service';
import {AppGlobals} from '../services/appglobals.service';


@Injectable()
export class BackendServices {

    private _baseUrl = '';

    constructor(private _http: Http, private _appGlobals: AppGlobals) {
        console.log("BackendServices constructor");
        _appGlobals._backendUrl.subscribe(value => this._baseUrl = value);
        console.log("base url set to '" + this._baseUrl + "'");
        if (this._baseUrl == "http://undefined:undefined/") {
            this._baseUrl = "http://localhost:2002/";
            console.log("base url undefined, setting back to default " + this._baseUrl);
        }
    }

    get(path) {
        var headers = new Headers();
        //headers.append('Authorization', 'Basic YWRtaW46c2t5c2FpbA==');
        return this._http.get(this._baseUrl + path, { headers: headers })
            .map(res => res.json());
    }

    getFramework(): Observable<any> {
        return this._http.get(this._baseUrl + 'backend/v1/framework')
            .map(res => res.json());
    }

    getBundles(): Observable<Bundle[]> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles')
            .map(res => res.json());
    }

    getBundle(id): Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id)
            .map(res => res.json());
    }

    getBundleServices(id): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/services")
            .map(res => res.json());
    }

    getBundleContents(id): Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents")
            .map(res => res.json());
    }

    getBundleFileContents(id: string, filename: string): Observable<string> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents/" + filename)
            .map(res => res.json());
    }

    getServices(): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/v1/services')
            .map(res => res.json());
    }

    getService(id): Observable<Service> {
        return this._http.get(this._baseUrl + 'backend/v1/services/' + id)
            .map(res => res.json());
    }

    getPackages(): Observable<ExportPackage[]> {
        return this._http.get(this._baseUrl + 'backend/v1/packages')
            .map(res => res.json());
    }

    getLogs(): Observable<LogEntry[]> {
        return this._http.get(this._baseUrl + 'backend/v1/logs')
            .map(res => res.json());
    }

    getSnapshots(): Observable<Snapshot[]> {
        return this._http.get(this._baseUrl + 'backend/v1/snapshots')
            .map(res => res.json());
    }

    getLatestSnapshot(): Observable<Snapshot> {
        return this._http.get(this._baseUrl + 'backend/v1/snapshotdetails/latest')
            .map(res => res.json());
    }

    createSnapshot() {
        return this._http.post(this._baseUrl + 'backend/v1/snapshots/', JSON.stringify("create"))
            //.map(res => res.json())
            ;
    }

    getVersion() {
        return this._http.get(this._baseUrl + 'backedn/v1/client/version')
            .map(res => res.text());
    }
}