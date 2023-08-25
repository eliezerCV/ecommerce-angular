import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckoutState } from 'src/app/enums/checkou-state';
import { UserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-form-shipping',
  templateUrl: './form-shipping.component.html',
  styleUrls: ['./form-shipping.component.scss']
})
export class FormShippingComponent implements OnInit {

  @Output() changeStateEvent = new EventEmitter<UserData>();

  userData: UserData = {
    name: '',
    address: '',
    phone: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeState(): void {
    console.log(this.userData.name.length)
    console.log(this.userData.address.length)
    console.log(this.userData.phone.length)
    if (!this.validateForm()) {
      return;
    }
    this.changeStateEvent.emit(this.userData);
  }

  validateForm(): boolean {
    return this.userData.name.length > 0 &&
      this.userData.address.length > 0 &&
      this.userData.phone.length > 0;
  }

}
