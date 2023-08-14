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
  }

  onClick(){
    this.router.navigateByUrl('/checkout'); 
  }

  //Remove product from cart
  removeFromCart(product:any){
    this.cartService.removeProduct(product);

    
  }
}
