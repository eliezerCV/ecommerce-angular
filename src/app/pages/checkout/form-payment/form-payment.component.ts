import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {

  processingOrder: boolean = false;

  payForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
    expiration: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.processingOrder = true;
    setTimeout(() => {
      this.processingOrder = false;
    }, 3000);
  }

  get name() { return this.payForm.get('name') as FormControl; }
  get cardNumber() { return this.payForm.get('cardNumber') as FormControl; }
  get expiration() { return this.payForm.get('expiration') as FormControl; }
  get cvv() { return this.payForm.get('cvv') as FormControl; }


}
