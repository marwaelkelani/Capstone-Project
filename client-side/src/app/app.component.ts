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

  constructor(private cartService: ShoppingCartService){
    this.products = this.cartService.getItems();

    this.cartService.loadCart();
  }

  getItems(){
    this.cartService.loadCart();
    return this.products = this.cartService.getItems();
  }

}
