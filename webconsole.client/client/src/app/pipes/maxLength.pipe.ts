import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';

@Pipe({
    name: 'maxLength',
})
@Injectable()
export class MaxLengthPipe implements PipeTransform {
    transform(value: string, args: any[]): any {
        if (value == null || value.length == 0) {
            return "";
        }
        if (typeof args == 'undefined') {
            console.log("pipe needs args");
            return value;
        }
        if (value.length < args[0]) {
            return value;
        }
       return "<span title='"+value+"'>" + value.substr(0,+args) + "...</span>";
   }
}