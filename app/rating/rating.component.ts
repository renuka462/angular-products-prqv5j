import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

@Input('rating-value') rating=0;
@Input() numOfReviews=0;
@Input() ratingCategory=0;

onClick(ratingValue){
  this.rating=ratingValue;
  this.ratingCategory=ratingValue;
}
  constructor() { }

  ngOnInit() {
  }

}