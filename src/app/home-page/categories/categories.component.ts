import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  panelOpenState = false;
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  setBrand(brand: string) {
    this.router.navigate(['/'], {
      queryParams: {
        brand: brand
      },
      queryParamsHandling: 'merge'
    })
  }
  setCategory(category: string) {
    this.router.navigate(['/'], {
      queryParams: {
        category: category
      },
      queryParamsHandling: 'merge'
    })
  }
}
