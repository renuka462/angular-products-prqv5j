import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit:number): string {
    if(value.length>30)
      return value.substring(0,limit)+"..";
    else
      return value;
  }

}