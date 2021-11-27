import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productFilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }

        filter = filter.toLowerCase();
        return items.filter(item => item.name.toLowerCase().indexOf(filter) !== -1);
    }
}
