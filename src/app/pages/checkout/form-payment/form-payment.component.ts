import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {

  processingOrder: boolean = false;
  showModalFeedback: boolean = false;

  payForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
    expMonth: new FormControl('', Validators.required),
    expYear: new FormControl('', Validators.required),
    cvc: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.payForm.value);
    this.processingOrder = true;
    setTimeout(() => {
      this.processingOrder = false;
      this.showModalFeedback = true;
    }, 1000);
  }

  closeModalFeedBack() {
    this.showModalFeedback = false;
  }

  get name() { return this.payForm.get('name') as FormControl; }
  get cardNumber() { return this.payForm.get('cardNumber') as FormControl; }
  get expm() { return this.payForm.get('expMonth') as FormControl; }
  get expy() { return this.payForm.get('expYear') as FormControl; }
  get cvc() { return this.payForm.get('cvc') as FormControl; }


}
