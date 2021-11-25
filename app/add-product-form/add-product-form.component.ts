import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  submitted :boolean=true;
  constructor() { }

  ngOnInit() {
  }
onSubmit(proFrom:NgForm):void
{
  this.submitted=false;
  console.log(proFrom.value);
   console.log(proFrom.controls['productimage'].value);
}

}