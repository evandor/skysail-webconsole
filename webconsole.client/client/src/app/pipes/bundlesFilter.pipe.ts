import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';

@Pipe({
    name: 'bundlesFilter'
})
@Injectable()
export class BundlesFilter implements PipeTransform {
    transform(bundles: Bundle[], args: any[]): any {
        if (bundles == null) {
            return Bundle[0];
        }
        if (typeof args[0] == 'undefined') {
            return bundles.filter(bundle => true);
        }
        return bundles.filter(bundle => bundle.symbolicName.indexOf(args.toString()) !== -1);
    }
}