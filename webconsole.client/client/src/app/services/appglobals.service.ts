import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppGlobals {

    public _isLoading:     BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public _filteredCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public _backendUrl:    BehaviorSubject<string> = new BehaviorSubject<string>("http://localhost:2002/");

    setIsLoading(isLoading: boolean) {
        this._isLoading.next(isLoading);
    }

    setFilteredCount(count: number) {
        this._filteredCount.next(count);
    }
    
    setBackendUrl(url: string) {
        this._backendUrl.next(url);
    }

}