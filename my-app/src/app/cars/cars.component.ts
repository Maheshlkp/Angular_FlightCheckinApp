import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:object[];
  hide:boolean;

  constructor() {

  this.cars=[
    {
      make: "Benz",
      model: "c300",
      year: "2015"
    },
    {
      make: "BMW",
      model: "I500C",
      year: "2018"
    },
    {
      make: "Audi",
      model: "X series",
      year: "2016"
    }
  ]
  this.hide=true;
   }

   displayData(){
     this.hide=!this.hide;
   }

   getData():object[]{
     return this.cars;
   }

  ngOnInit() {
  }

}
