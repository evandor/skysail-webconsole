import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';

@Pipe({
    name: 'bundlesFilter',
    pure: false
})
@Injectable()
export class BundlesFilter implements PipeTransform {
    tmp = [];
    transform(bundles: Bundle[], args: any[]): any {
        if (bundles == null) {
            console.log("ARGS1: null");
            return Bundle[0];
        }
        if (typeof args == 'undefined') {
            console.log("ARGS2: " + args[0]);
            return bundles.filter(bundle => true);
        }
        return bundles.filter(bundle => bundle.symbolicName.indexOf(args[0]) !== -1);
    }
}