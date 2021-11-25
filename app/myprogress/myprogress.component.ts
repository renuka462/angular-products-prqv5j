import { Component, OnInit,Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {Myprogresstype} from '../myprogresstype.enum';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-myprogress',
  templateUrl: './myprogress.component.html',
  styleUrls: ['./myprogress.component.css']
})
export class MyprogressComponent implements OnInit {
foods: Food[] = [
    {value: '100', viewValue: 'Steak'},
    {value: '50', viewValue: 'Pizza'},
    {value: '99', viewValue: 'Tacos'}
  ];
 @Input() type:any;
 public Myprogresstype: any = Myprogresstype;
  networth:string="1000.00";
  label:string="";
  decimalpart ="00";
  constructor() { }
  changefood(event,newvalue) {
   this.label = (Math.floor(Number(newvalue))).toLocaleString();
   this.decimalpart = (Number(newvalue) % 1).toFixed(2);
    alert("Changed month from the Dropdown"+ newvalue);
      console.log("Changed month from the Dropdown");
      console.log(event);
   }
  ngOnInit() {
    
  }
 

}