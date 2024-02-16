import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   // https://my-json-server.typicode.com/asya19/database/images

  getJsonData() {
    return this.http.get('https://my-json-server.typicode.com/asya19/database/images');
  }

}
