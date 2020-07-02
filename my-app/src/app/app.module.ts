import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { CarsComponent } from './cars/cars.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CountriesComponent } from './components/countries/countries.component';
import {CountriesService} from './services/countries.service';
import {HttpClientModule} from '@angular/common/http';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import {UppercaseConverterService} from './services/uppercase-converter.service';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    CarsComponent,
    NgIfComponent,
    NgswitchComponent,
    NgforComponent,
    CountriesComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [UppercaseConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
