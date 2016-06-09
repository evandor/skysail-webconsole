import {Injectable, Pipe, PipeTransform} from 'angular2/core';

import {Bundle} from '../domain/bundle';

@Pipe({
    name: 'bundleState'
})
@Injectable()
export class BundleStatePipe implements PipeTransform {
    transform(bundleState: string): any {
        if (bundleState == null) {
            return "<span>***</span>";
        }
        return "<span class='"+this.getStateClass(bundleState)+"'>" + bundleState + "</span>";
    }

    getStateClass(state: string) {
        switch (state) {
            case "ACTIVE":
                return "label label-success";
            case "INSTALLED":
                return "label label-warning";
            default:
                return "label label-danger";
        }
    }


}