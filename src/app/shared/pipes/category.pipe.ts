import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from './../interfaces';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  constructor(
  ) { }
  transform(products: IProduct[], params: Params): IProduct[] {
    if (params['category']) {
      return products = products.filter(p => p.category === params['category'])
    } else return products
  }
}
