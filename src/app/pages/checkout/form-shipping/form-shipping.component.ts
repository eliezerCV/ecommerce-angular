import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckoutState } from 'src/app/enums/checkou-state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])
  });

  constructor() { }
  ngOnInit(): void {}

  get name(): any { return this.formData.get('name') as FormControl; }
  get address(): any { return this.formData.get('address') as FormControl; }
  get phone(): any { return this.formData.get('phone') as FormControl; }

  changeState(): void {
    if (this.formData.invalid) { return; }
    this.userData = this.formData.value;
    this.changeStateEvent.emit(this.userData);
  }

}
