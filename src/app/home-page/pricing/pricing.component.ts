import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  form: FormGroup
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.form = new FormGroup({
      from: new FormControl(''),
      to: new FormControl('')
    })
  }
  setPrice(from?: number, to?: number) {
    this.router.navigate(['/'], {
      queryParams: {
        from: from,
        to: to
      },
      queryParamsHandling: 'merge'
    })
  }
  search() {
    this.setPrice(this.form.value.from, this.form.value.to)
  }
}
