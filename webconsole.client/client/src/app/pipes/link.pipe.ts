import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Bundle} from '../domain/bundle';
import {AppGlobals} from '../services/appglobals.service';

@Pipe({
    name: 'link'
})
@Injectable()
export class LinkPipe implements PipeTransform {

    constructor(private _appGlobals: AppGlobals) {}

    transform(text: string, args: any[]): any {
        if (text.startsWith('http')) {
            return "<a href='"+text+"' target='_blank'>"+text+"</a>";
        }
        return text;
    }
}