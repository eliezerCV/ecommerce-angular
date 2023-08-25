import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-form-shipping',
  templateUrl: './form-shipping.component.html',
  styleUrls: ['./form-shipping.component.scss']
})
export class FormShippingComponent implements OnInit {

  @Output() changeStateEvent = new EventEmitter<string>();

  userData: UserData = {
    name: '',
    address: '',
    phone: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: string): void {
    this.changeStateEvent.emit(state);
  }

}
