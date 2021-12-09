import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/services/auth.service';
import { ProductService } from './../shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchParams = ''
  constructor(
    public auth: AuthService,
    private prod: ProductService
  ) { }
  ngOnInit() {
  }
  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
  }
  search() {
    this.prod.search(this.searchParams)
  }
}
