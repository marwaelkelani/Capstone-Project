import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { Iproduct } from './interfaces/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salePercent = '25%';
  banner = "./assets/SVBanner.png";
  math = './assets/calculator.png';
  science = './assets/science.png';
  art = './assets/paint-palette.png';
  tech= './assets/tech.png';
  products: Iproduct[]


  //shopping cart icon
  cartItems: number = 0;

  constructor(private cartService: ShoppingCartService){
    this.products = this.cartService.getItems();
    this.cartService.loadCart();

    this.cartService.cartSubject.subscribe((data)=>{
      this.cartItems = data;
    })
  }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  getItems(){
    this.cartService.loadCart();
    return this.products = this.cartService.getItems();
  }

  cartItemFunc(){
    if(localStorage.getItem('cart_items') != null){
      var cartCount = JSON.parse(localStorage.getItem('cart_items') as any);
      this.cartItems = cartCount.length;
    }
  }
   
  }


