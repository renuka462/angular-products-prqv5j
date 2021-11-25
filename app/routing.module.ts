import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {HelloComponent } from './hello.component';
import {AddProductFormComponent} from './add-product-form/add-product-form.component';
import {FbloginComponent} from './fblogin/fblogin.component';
import {MyprogressComponent} from './myprogress/myprogress.component';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
export const routing=RouterModule.forRoot([
  {path:'',component:HelloComponent},
  {path:'products',component:ProductsComponent},
  {path:'add-product',component:AddProductFormComponent},
  {path:'fblogin',component:FbloginComponent},
  {path:'myprogress',component:MyprogressComponent, },
  {path: 'reactiveform',component:ReactiveformComponent}
])