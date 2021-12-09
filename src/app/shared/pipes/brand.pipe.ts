import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from '../interfaces';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {
  transform(products: IProduct[], params: Params): IProduct[] {
    switch (params['brand']) {
      default: return products
      case 'Apple': {
        return products = products.filter(p => p.brand === 'Apple')
      }
      case 'Samsung': {
        return products = products.filter(p => p.brand === 'Samsung')
      }
      case 'Orbea': {
        return products = products.filter(p => p.brand === 'Orbea')
      }
      case 'Aromatica': {
        return products = products.filter(p => p.brand === 'Aromatica')
      }
    }
  }
}