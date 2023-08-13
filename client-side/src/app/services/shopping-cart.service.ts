import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
items: Iproduct[] = [];
  constructor() { }

  addToCart(product: Iproduct){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
