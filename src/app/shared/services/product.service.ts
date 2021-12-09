import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './../interfaces';
import { firebaseConfig } from './../../../environments/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[]
  constructor(
    private http: HttpClient
  ) { }
  search(search: string) {
    this.products = this.products.filter(p => p.name.includes(search))
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${firebaseConfig.database}/products.json`)
  }
}
