import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ConfigService} from '../services/config.service';

@Injectable()
export class AppGlobals {

    public _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public _filteredCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public _bundleIdList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    public _backendUrl: BehaviorSubject<string> = new BehaviorSubject<string>("http://localhost:2002/");
    public _routeParams: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(private _configService: ConfigService) {
        console.log("AppGlobals constructor");
        this._backendUrl.next("http://" + location.hostname + ":2002/");
    }

    setIsLoading(isLoading: boolean) {
        this._isLoading.next(isLoading);
    }

    setFilteredCount(count: number) {
        this._filteredCount.next(count);
    }

    setBackendUrl(url: string) {
        this._backendUrl.next(url);
    }

    setBundleIdList(theList: string[]) {
        console.log(theList);
        this._bundleIdList.next(theList);
    }

    setRouteParams(params: any) {
        this._routeParams.next(params);
    }

}