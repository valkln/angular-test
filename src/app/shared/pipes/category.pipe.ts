import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from './../interfaces';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  constructor(
    private route: ActivatedRoute
  ) { }
  transform(products: IProduct[], params: Params): IProduct[] {
    switch (params['category']) {
      default: return products
      case 'electronics': {
        return products = products.filter(p => p.category === 'electronics')
      }
      case 'health': {
        return products = products.filter(p => p.category === 'health')
      }
      case 'sport': {
        return products = products.filter(p => p.category === 'sport')
      }
    }
  }
}
