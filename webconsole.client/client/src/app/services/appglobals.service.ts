import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppGlobals {

    public _isLoading:     BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public _filteredCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    setIsLoading(isLoading: boolean) {
        this._isLoading.next(isLoading);
    }

    setFilteredCount(count: number) {
        this._filteredCount.next(count);
    }
}