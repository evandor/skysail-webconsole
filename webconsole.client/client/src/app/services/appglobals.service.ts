import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppGlobals {

    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    isLoadingObservable$ = this._isLoading.asObservable();

    setIsLoading(isLoading) {
        console.log("setting isLoading to " + isLoading);
        this._isLoading.next(isLoading);
    }
}