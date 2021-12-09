import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from './../shared/interfaces';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products$: Observable<IProduct[]>
  params: any
  constructor(
    private prod: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.products$ = this.prod.getProducts()
    this.route.queryParams.subscribe(p => {
      this.params = p
    })
  }
  resetQuery() {
    this.router.navigate(['/'])
  }
}
