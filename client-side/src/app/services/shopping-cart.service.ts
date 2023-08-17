import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

//shopping cart properties
  products: Iproduct[] = [];

//shopping cart icon property

  constructor(private http: HttpClient) { 
  }

 

  //Shopping Cart methods

  addToCart(addedProduct: Iproduct){
    this.products.push(addedProduct);
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
    console.log(this.products)
  }

  productsInCart(product: Iproduct): boolean{
    return this.products.findIndex((x:any)=> x.id === product.id) > -1
  }

  removeProduct(product: any){
    const index = this.products.findIndex((x:any)=> x.id === product.id);

    if(index > -1){
      this.products.splice(index,1);
      this.saveCart();
    }
  }

    //Update shopping cart icon number
    cartSubject = new Subject<any>();
 
}
