import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {ExportPackage} from '../domain/exportpackage';
import {AppGlobals} from '../services/appglobals.service';

@Pipe({
    name: 'packagesFilter'
})
@Injectable()
export class PackagesFilter implements PipeTransform {

    constructor(private _appGlobals: AppGlobals) { }

    transform(packages: ExportPackage[], args: any[]): any {
        if (packages == null) {
            //this._appGlobals.setFilteredCount(0);
            return ExportPackage[0];
        }
        if (typeof args[0] == 'undefined') {
            //this._appGlobals.setFilteredCount(services.length);
            return packages.filter(bundle => true);
        }
        var filtered = packages.filter(pkg => pkg.pkgName.indexOf(args.toString()) !== -1);
       // this._appGlobals.setFilteredCount(filteredBundles.length);

        /*var theList: string[] = [];
        filteredServices.forEach(bundle => {
            theList.push(bundle.id);
        });*/
        //this._appGlobals.setBundleIdList(theList);

        return filtered;
    }
}