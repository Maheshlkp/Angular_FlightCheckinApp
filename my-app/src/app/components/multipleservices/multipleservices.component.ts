import { Component, OnInit } from '@angular/core';
import {HelloserviceService} from '../../services/helloservice.service';
import {CustomerserviceService} from '../../services/customerservice.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-multipleservices',
  templateUrl: './multipleservices.component.html',
  styleUrls: ['./multipleservices.component.css']
})
export class MultipleservicesComponent implements OnInit {

  private helloResponse:any;
  private customerResponse:any;

  constructor(private _helloService:HelloserviceService, private _customerService:CustomerserviceService) { }

  ngOnInit() {
    forkJoin([this._helloService.getService(),this._customerService.getCustomers()])
    .subscribe(Response=>{
      this.helloResponse=Response[0];
      this.customerResponse=Response[1];
    })
  }

}
