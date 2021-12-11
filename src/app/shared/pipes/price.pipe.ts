import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from './../interfaces';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  constructor(
  ) { }
  transform(products: IProduct[], params: Params): IProduct[] {
    let to = params['to']
    let from = params['from']
    if (from && to) {
      return products = products.filter(p => p.price < +to && p.price > +from)
    } else if (from) {
      return products = products.filter(p => p.price > +from)
    } else if (to) {
      return products = products.filter(p => p.price < +to)
    } else return products
  }
}
