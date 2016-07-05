import {Component} from "@angular/core";
import {ActivatedRoute} from '@angular/router';

import {AppGlobals} from '../../services/appglobals.service';

@Component({
    selector: 'navigation',
    templateUrl: 'app/html/navbar/navigation.template.html'
})
export class NavigationComponent {

    bundleIdList: string[] = [];

    constructor(private _route: ActivatedRoute, private _appGlobals: AppGlobals) {
        this._appGlobals._bundleIdList.subscribe(val => this.bundleIdList = val);
    }

    next() {
        this._route.params.subscribe(params => {
            let currentId = params['id'];

            var goto = 0;
            var index = 0;
            this.bundleIdList.forEach(id => {
                //index 
                if (id == currentId) {
                  //  goto = 
                }
            });
        });

    }
}