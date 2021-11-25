import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';
import { ProductsComponent } from './products/products.component';
import { TruncatePipe } from './truncate.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './product.service';

import {routing} from './routing.module';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { FbloginComponent } from './fblogin/fblogin.component';
import { MyprogressComponent } from './myprogress/myprogress.component';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,routing,BrowserAnimationsModule,MatProgressBarModule,MatSelectModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, RatingComponent, ProductsComponent, TruncatePipe, HeaderComponent, AddProductFormComponent, FbloginComponent, MyprogressComponent, ReactiveformComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
