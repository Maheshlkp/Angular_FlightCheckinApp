import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HelloserviceService {

  constructor(private _httpClient:HttpClient) { }

  public getService():any{
    return this._httpClient.get('http://test-routes.herokuapp.com/test/hello');
  }
}
