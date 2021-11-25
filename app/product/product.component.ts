import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input()
  data: any;
  productsList: any[] = [];

  ngOnInit(): void {
    this.productsList = [
      {
        name: 'Santoor',
        description: 'manufactured in 2021',
        price: 100,
      },
      {
        name: 'Rexona',
        description: 'manufactured in 2020',
        price: 100,
      },
      {
        name: 'Santoor',
        description: 'manufactured in 2021',
        price: 100,
      },
    ];
  }
}
