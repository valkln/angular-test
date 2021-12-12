import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './../interfaces';
import { firebaseConfig } from './../../../environments/firebaseConfig';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${firebaseConfig.database}/products.json`)
  }
}