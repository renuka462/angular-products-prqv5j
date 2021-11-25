import { Component } from '@angular/core';
import {Myprogresstype} from './myprogresstype.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
   public Myprogresstype: any = Myprogresstype;

}
