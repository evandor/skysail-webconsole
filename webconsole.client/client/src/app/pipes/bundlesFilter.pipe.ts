import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';
import {AppGlobals} from '../services/appglobals.service';

@Pipe({
    name: 'bundlesFilter'
})
@Injectable()
export class BundlesFilter implements PipeTransform {

    constructor(private _appGlobals: AppGlobals) {}

    transform(bundles: Bundle[], args: any[]): any {
        if (bundles == null) {
            this._appGlobals.setFilteredCount(0);
            return Bundle[0];
        }
        if (typeof args[0] == 'undefined') {
            this._appGlobals.setFilteredCount(bundles.length);
            return bundles.filter(bundle => true);
        }
        var filteredBundles = bundles.filter(bundle => bundle.symbolicName.indexOf(args.toString()) !== -1);
        this._appGlobals.setFilteredCount(filteredBundles.length);
        return filteredBundles;
    }
}