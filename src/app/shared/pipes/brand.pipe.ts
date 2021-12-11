import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from '../interfaces';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {
  transform(products: IProduct[], params: Params): IProduct[] {
    if (params['brand']) {
      return products = products.filter(p => p.brand === params['brand'])
    } else return products
  }
}