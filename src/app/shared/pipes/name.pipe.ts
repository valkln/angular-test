import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from './../interfaces';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(products: IProduct[], params: Params): IProduct[] {
    let search = params['search']
    if (search) {
      if (!search.trim()) {
        return products
      }
      return products.filter(p => {
        return p.name.toLowerCase().includes(search.toLowerCase())
      })
    } else return products
  }

}
