import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'assets/data/burgers.json';

  constructor(private http: HttpClient) { }

  getBurgers() {
    return this.http.get(this.url);
  }

  getDrinks() {
    return this.http.get('assets/data/drinks.json');
  }
}
