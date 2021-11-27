import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSum',
  pure: false
})
export class ProductSumPipe implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return 0;
    }
    return items.map(i=>i.price).reduce((a,b)=>a+b);
  }
}
