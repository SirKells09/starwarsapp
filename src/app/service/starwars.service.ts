import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  

  private starWarsUrl= `https://swapi.co/api/`;

  getPeople(type, search){
      return this.http.get(this.starWarsUrl+ type +`/?search=`+search)
  }
  constructor(private http: HttpClient) { }



}