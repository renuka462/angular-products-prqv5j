import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'products',
  template:`<h2>Products</h2>
  <div *ngIf="products==null || products.length==0;else loading">
  No Products to display
  </div>
  <ng-template #loading>
 
  <div *ngFor="let product of products">
  <product [data]="product"></product>
  </div>
  </ng-template>
  `,
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {

products:any[];
  constructor(private _productservice:ProductService) { }

  ngOnInit() {
   this.products= this._productservice.getProducts();
  }

}