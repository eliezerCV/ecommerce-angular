import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private dataSubject = new Subject<number>();
  cartItems: CartItem[] = [];

  constructor() { }

  addItem(item: CartItem) {
    this.cartItems.push(item);
    this.dataSubject.next(this.cartItems.length);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
