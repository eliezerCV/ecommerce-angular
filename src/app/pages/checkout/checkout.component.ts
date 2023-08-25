import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  state = 'shipping';


  constructor() { }

  ngOnInit(): void {}

  changeStateEvent(state: string): void {
    this.state = state;
  }

}
