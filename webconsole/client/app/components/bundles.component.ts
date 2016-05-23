import {Component,OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from 'angular2/common';

import {BundlesService} from '../services/bundles.service';

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel],
    providers: [BundlesService],
    templateUrl: 'app/html/bundles.template.html'
})
export class BundlesComponent implements OnInit {
    
    bundles = []; 

    constructor(private _bundleService: BundlesService) {
        console.log("in BundlesComponent constructor");

        this._bundleService.getBundles()
            .subscribe(res => this.bundles = res);
            
        console.log(this.bundles);
    }
    
    onInit() {
    }
    
    ngOnInit(){
        console.log("oninit bundlesservice called");
         this._bundleService.getBundles()
            .subscribe(res => this.bundles = res);
        //.subscribe(res => console.log(res));
    }

    

}
