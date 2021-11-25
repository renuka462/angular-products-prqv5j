import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts():any[]{
    return [
      {
        imageUrl:"http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        productName:"Product 1",
        releaseDate:"May 31 2018",
        description:"Only a test product but description is biggi ",
        rating:4,
        numOfReviews:3
      },
      {
        imageUrl:"http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
        productName:"Product 2",
        releaseDate:"Jun 31 2018",
        description:"This is a test product ",
        rating:3,
        numOfReviews:2
      }
    ];
  }

}