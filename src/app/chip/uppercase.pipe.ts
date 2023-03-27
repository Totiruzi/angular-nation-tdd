import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercased'
})
export class UpperCasedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
