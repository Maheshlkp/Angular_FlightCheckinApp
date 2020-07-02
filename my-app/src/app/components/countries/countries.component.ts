import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private _service:CountriesService) { }

  public data: any;

  ngOnInit() {
    this._service.getCountries().subscribe(Response=>{
      this.data=Response;
    },
    (error)=>{
      console.error(error);
    }
    
    )

  }

}
