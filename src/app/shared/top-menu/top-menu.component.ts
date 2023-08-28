import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  cartItemsCount: number = 0;
  selectedCategory: string = 'burgers';
  floatingCart: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  openFloatingCart() {
    this.floatingCart = !this.floatingCart;
  }

}
