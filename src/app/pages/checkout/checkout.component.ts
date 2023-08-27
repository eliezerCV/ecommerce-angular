import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckoutState } from 'src/app/enums/checkou-state';
import { UserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  state = CheckoutState.Payment;
  userData: UserData = {
    name: '',
    address: '',
    phone: ''
  }

  constructor() { }

  ngOnInit(): void {}

  changeStateEvent(user: UserData): void {
    this.state = CheckoutState.Payment;
    this.userData = user;
    // localStorage.setItem('userData', JSON.stringify(user));
  }

}
