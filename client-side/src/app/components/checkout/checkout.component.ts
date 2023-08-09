import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
checkoutForm!: FormGroup

  constructor(private fb: FormBuilder){
    this.checkoutForm = fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      card_number: ['', Validators.required], //fix validations
      card_name: ['', Validators.required],
      expiry_date: ['', Validators.required],
      security_number: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  //Submit Function goes here

  //Getters for Checkout Form

  get first_name(){
    return this.checkoutForm.get('first_name')!;
  }


}
