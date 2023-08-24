import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  count: number = 2;
  selectedCategory: string = 'burgers';
  floatingCart: boolean = false;

  constructor() { }
  ngOnInit(): void {}

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  openFloatingCart() {
    this.floatingCart = !this.floatingCart;
  }

}
