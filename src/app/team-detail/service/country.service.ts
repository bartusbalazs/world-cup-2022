import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CountryService {

  private countryUrl = 'https://restcountries.com/v3.1/name/';

  countryData: any;

  constructor(private http: HttpClient) { }

  initCountryData(countryName:string): Observable<any> {
    return this.http.get<any>(this.countryUrl +
      countryName.toLowerCase());
  }

}
