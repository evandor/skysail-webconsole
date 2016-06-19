import {Pipe, PipeTransform} from '@angular/core';

// see https://github.com/angular/angular/issues/6392

@Pipe({ name: 'derp' })
export class DerpPipe implements PipeTransform {
  transform (value, args) {
    if (Array.isArray(value))
        return Array.from(value);
    else
        return [value];
  }
}