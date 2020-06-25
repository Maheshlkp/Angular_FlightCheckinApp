import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: object[];

  constructor() { 
    this.products=[
        {
          id : 1,
          name : "Mac Book pro",
          price : 1300
        },
        {
          id : 2,
          name : "Dell Laptop",
          price : 800

        },
        {
          id : 3,
          name : "HP",
          price : 1100

        }

    ]
  }

  public getProducts() : object[]{
    return this.products;
  }

  ngOnInit() {
  }

}
