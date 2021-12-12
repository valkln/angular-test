import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from './../../shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() products: IProduct[]
  public pageEvent: PageEvent
  public pageSlice: IProduct[]
  constructor() { }
  ngOnChanges() {
    if (this.products) {
      this.pageSlice = this.products.slice(0, 12)
    }
  }
  ngOnInit() {
    if (this.products) {
      this.pageSlice = this.products.slice(0, 12)
    }
  }
  changePage(event: PageEvent) {
    console.log(event)
    let startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.products.length) {
      endIndex = this.products.length
    }
    this.pageSlice = this.products.slice(startIndex, endIndex)
    return event
  }
}
