import {Injectable, OnInit} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage';
import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';
import {Snapshot} from '../domain/snapshot';
import {RuntimeConfig} from '../domain/runtimeconfig';

import {ConfigService} from '../services/config.service';
import {AppGlobals} from '../services/appglobals.service';


@Injectable()
export class BackendServices {

    private _baseUrl = '';
    headers = new Headers();

    constructor(private _http: Http, private _appGlobals: AppGlobals) {
        //console.log("BackendServices constructor");
        _appGlobals._backendUrl.subscribe(value => this._baseUrl = value);
        console.log("base url set to '" + this._baseUrl + "'");
        if (this._baseUrl == "http://undefined:undefined/") {
            this._baseUrl = "http://localhost:2002/";
            console.log("base url undefined, setting back to default " + this._baseUrl);
        }
        this.headers.append('Authorization', 'Basic d2ViY29uc29sZTp3ZWJjb25zb2xl');
        this.headers.append('Access-Control-Allow-Origin','*');
    }

    get(path) {
        var headers = new Headers();
        headers.append('Authorization', 'Basic d2Vic29uc29sZTp3ZWJzb25zb2xl');
        return this._http.get(this._baseUrl + path, { headers: headers })
            .map(res => res.json());
    }

    getFramework(): Observable<any> {
        return this._http.get(this._baseUrl + 'backend/v1/framework', { headers: this.headers })
            .map(res => res.json());
    }

    getBundles(): Observable<Bundle[]> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles', { headers: this.headers })
            .map(res => res.json());
    }

    getBundle(id): Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id, { headers: this.headers })
            .map(res => res.json());
    }

    getBundleServices(id): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/services", { headers: this.headers })
            .map(res => res.json());
    }

    getBundleContents(id): Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents", { headers: this.headers })
            .map(res => res.json());
    }

    getBundleFileContents(id: string, filename: string): Observable<string> {
        return this._http.get(this._baseUrl + 'backend/v1/bundles/' + id + "/contents/" + filename, { headers: this.headers })
            .map(res => res.json());
    }

    getServices(): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/v1/services', { headers: this.headers })
            .map(res => res.json());
    }

    getService(id): Observable<Service> {
        return this._http.get(this._baseUrl + 'backend/v1/services/' + id, { headers: this.headers })
            .map(res => res.json());
    }

    getPackages(): Observable<ExportPackage[]> {
        return this._http.get(this._baseUrl + 'backend/v1/packages', { headers: this.headers })
            .map(res => res.json());
    }

    getMatchingPackages(part: string): Observable<ExportPackage[]> {
        return this._http.get(this._baseUrl + 'backend/v1/packages/' + part, { headers: this.headers })
            .map(res => res.json());
    }

    getLogs(): Observable<LogEntry[]> {
        return this._http.get(this._baseUrl + 'backend/v1/logs', { headers: this.headers })
            .map(res => res.json());
    }

    getSnapshots(): Observable<Snapshot[]> {
        return this._http.get(this._baseUrl + 'backend/v1/snapshots', { headers: this.headers })
            .map(res => res.json());
    }

    getLatestSnapshot(): Observable<Snapshot> {
        return this._http.get(this._baseUrl + 'backend/v1/snapshotdetails/latest', { headers: this.headers })
            .map(res => res.json());
    }

    createSnapshot() {
        return this._http.post(this._baseUrl + 'backend/v1/snapshots/', JSON.stringify("create"), { headers: this.headers })
            //.map(res => res.json())
            ;
    }

    getVersion() {
        return this._http.get(this._baseUrl + 'backend/v1/client/version', { headers: this.headers })
            .map(res => res.text());
    }

    getRuntimeConfig(): Observable<RuntimeConfig> {
        return this._http.get(this._baseUrl + 'backend/v1/runtimeconfig', { headers: this.headers })
            .map(res => res.json());
    }

}