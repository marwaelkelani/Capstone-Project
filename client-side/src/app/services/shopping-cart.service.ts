import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
products: Iproduct[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: Iproduct){
    this.products.push(product);
    this.saveCart();
  }
  
  getAllProducts(){
    return this.http.get('http://localhost:4000/products');
  }

  getItems(){
    return this.products;
  }

  clearCart(){
    localStorage.clear();
  }

  saveCart(){
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  loadCart(){
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productsInCart(product: any){
    return this.products.findIndex((x:any)=> x.id === product.id) > -1
  }

  removeProduct(product: any){
    const index = this.products.findIndex((x:any)=> x.id === product.id);

    if(index > -1){
      this.products.splice(index,1);
      this.saveCart();
    }
  }
 
}
