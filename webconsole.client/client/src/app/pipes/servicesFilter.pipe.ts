import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Service} from '../domain/service';
import {AppGlobals} from '../services/appglobals.service';

@Pipe({
    name: 'servicesFilter'
})
@Injectable()
export class ServicesFilter implements PipeTransform {

    constructor(private _appGlobals: AppGlobals) { }

    transform(services: Service[], args: any[]): any {
        if (services == null) {
            //this._appGlobals.setFilteredCount(0);
            return Service[0];
        }
        if (typeof args[0] == 'undefined') {
            //this._appGlobals.setFilteredCount(services.length);
            return services.filter(bundle => true);
        }
        var filteredServices = services.filter(service => service.objectClass.indexOf(args.toString()) !== -1);
       // this._appGlobals.setFilteredCount(filteredBundles.length);

        var theList: string[] = [];
        filteredServices.forEach(bundle => {
            theList.push(bundle.id);
        });
        //this._appGlobals.setBundleIdList(theList);

        return filteredServices;
    }
}