import { Component, OnInit } from '@angular/core';
import {Links} from './links';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

header:Links[]=[];
  constructor() { }

  ngOnInit() {
    this.header=[new Links("Hello",""),
    
    new Links("R_Form","reactiveform"),
    new Links("Products","products"),
    new Links("AddProduct","add-product"),
    new Links("Login FaceBook","fblogin"),
    new Links("Progressbar","myprogress")];
  }

}