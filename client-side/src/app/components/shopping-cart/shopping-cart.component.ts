import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  products:Iproduct[] = this.cartService.getItems();

  constructor(private cartService: ShoppingCartService, private router: Router){

    this.products = this.cartService.getItems();

    this.cartService.loadCart();
  }

  

  clearCart(){
    this.cartService.clearCart();
    return this.products = this.cartService.getItems();
  }

  onClick(){
    this.router.navigateByUrl('/checkout'); 
  }

  //Remove product from cart
  removeFromCart(product:any){
    this.cartService.removeProduct(product);
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
}
