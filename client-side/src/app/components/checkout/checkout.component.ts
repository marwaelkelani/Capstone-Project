import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
checkoutForm!: FormGroup
redColor = 'red';

//Checkout
cartTotal!: any;

  constructor(private fb: FormBuilder){
    this.checkoutForm = fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      card_number: ['', [Validators.required, Validators.minLength(16)]], //fix validations
      card_name: ['', Validators.required],
      expiry_date: ['', Validators.required],
      security_number: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onPayment(){
    alert('Thank you! Your payment has been processed!');
    console.log(this.checkoutForm.value);
  }

  
  ngOnInit(){
    this.cartTotal = JSON.parse(localStorage.getItem('cart_total') as any) || [];
    console.log(this.cartTotal);
  }

  //Getters for Checkout Form

  get first_name(){
    return this.checkoutForm.get('first_name')!;
  }

  get last_name(){
    return this.checkoutForm.get('last_name')!;
  }

  get email(){
    return this.checkoutForm.get('email')!;
  }

  get card_number(){
    return this.checkoutForm.get('card_number')!;
  }

  get card_name(){
    return this.checkoutForm.get('card_name')!;
  }

  get expiry_date(){
    return this.checkoutForm.get('expiry_date')!;
  }

  get security_number(){
    return this.checkoutForm.get('security_number')!;
  }

}
