import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  products:object[];
  color:string;
  fontsize:string;
  useTdata:boolean;
  classObj:object;

  constructor() { 
    this.color="blue";
    this.fontsize="40"

    this.useTdata=true;
    this.classObj={
      tdata:this.useTdata
    }

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

  ngOnInit() {
  }

}
