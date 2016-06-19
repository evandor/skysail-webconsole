import {Pipe, PipeTransform} from '@angular/core';
/*
 * Converts newlines into breaks
*/
@Pipe({ name: 'newline' })
export class NewlinePipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}