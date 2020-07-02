import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller:string[];
  hide: boolean;
  

  constructor() { 

    this.seller=["BestBuy","Amazon","Apple Store"];
    this.hide=true;
    
  }

  myFun(){
    return true;
  }

  toggle(){
    this.hide=!this.hide;
  }

  getSeller():string[]{
    return this.seller;
  }
  ngOnInit() {
  }

}
