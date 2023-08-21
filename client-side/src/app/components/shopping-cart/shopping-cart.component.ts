import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  products:Iproduct[] = this.cartService.getItems();
  subTotal!: number;
  cartValue!: any;
  cartNumber: number = 0;


  constructor(private cartService: ShoppingCartService, private router: Router){

    this.products = this.cartService.getItems();

    this.cartService.loadCart();
  }

  //Clear all items from the cart
  clearCart(){
    localStorage.removeItem('cart_items');
    this.products = [];
    // this.cartNumberFunc();
    alert('All items have been removed from the shopping cart.')
    return this.cartNumber = 0;
  }

  //Remove a product from the cart
  removeFromCart(product:any){
    this.cartService.removeProduct(product);
    this.cartNumberFunc()
    return this.products = this.cartService.getItems();
  }

  //Calculate the total
  get total(){
    return this.products?.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price
      }),
      {quantity: 1, price: 0}
    ).price
  }

     //Change sub total amount
     changeSubTotal(product: Iproduct){
      const qty = product.quantity;
      const amt = product.price;
      this.subTotal = amt * qty;  
      this.cartService.saveCart();
    }

    //Checkout
    checkout(){
      localStorage.setItem('cart_total', JSON.stringify(this.total));
      this.router.navigate(['/checkout']);
    }


    //Incrementor Methods
    inc(product: Iproduct){
      // console.log(product.quantity)
      product.quantity += 1;
    }
  
    dec(product: Iproduct){
      // console.log(product.quantity);
  
      if(product.quantity !=1 ){
        product.quantity -= 1;
      }
      
    }

  
    //Cart Number Update
      cartNumberFunc(){
        this.cartValue = JSON.parse(localStorage.getItem('cart_items') as any);
        this.cartNumber = this.cartValue.length;
        this.cartService.cartSubject.next(this.cartNumber);
      }
  
}
