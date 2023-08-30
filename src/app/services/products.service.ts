import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'assets/data';

  constructor(private http: HttpClient) { }

  getBurgers(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/burgers.json`);
  }

  getDrinks(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/drinks.json`);
  }
}
