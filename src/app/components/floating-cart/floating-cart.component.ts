import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.scss']
})
export class FloatingCartComponent implements OnInit {

  count = 1;
  price = 5.25;
  total = 0;

  cartItems: any[] = [
    {name: 'Cheese Burger', price: 5.25, quantity: 1, total: 5.25, image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.count++;
  }
  onSubItem() {
    if (this.count > 1) {
      this.count--;
    }
  }

}
