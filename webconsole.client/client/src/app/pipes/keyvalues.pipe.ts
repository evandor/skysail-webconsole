import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keyValues', pure: false})
export class KeyValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let returnArray = [];

        value.forEach((entryVal, entryKey) => {
            returnArray.push({
                key: entryKey,
                val: entryVal
            });
        });

        return returnArray;
    }
}