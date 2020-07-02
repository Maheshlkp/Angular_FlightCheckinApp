import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  a:number;
  b:number;
  s:string;

  constructor() { 
    this.a=10;
    this.b=20;
    this.s="success";
  }

  ngOnInit() {
  }

}
