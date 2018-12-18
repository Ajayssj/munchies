import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(products: any, filter: Object): any {
    if (!products || !filter) {
      return products;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    console.log(products.filter(item => item.weeks.includes(filter)))
    return products.filter(item => item.weeks.includes(filter));
    }

}
