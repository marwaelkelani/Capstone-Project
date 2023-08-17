import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Igrades } from 'src/app/interfaces/igrades';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Isubject } from 'src/app/interfaces/isubject';
import { Itype } from 'src/app/interfaces/itype';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  math = './assets/calculator.png';
  science = './assets/science.png';
  art = './assets/paint-palette.png';
  tech = './assets/tech.png';
  products!: Iproduct[];
  product!: Iproduct;
  grades!: Igrades[];
  subjects!: Isubject[];
  types!: Itype[];

  //Cart
  productsList: Iproduct[] = [];
  subTotal: any

  constructor(private route: ActivatedRoute, private productService: ProductsService, private routeService: ActivatedRoute, private router: Router, private cartService: ShoppingCartService) {
    productService.getProducts().subscribe({
      next: (results) => {
        this.products = results;
      },
      error: (err) => {
        console.log(err);
      }
    });

    //Redirect to specific product from grid
    let productId = this.routeService.snapshot.paramMap.get('id');
    let id = parseInt(productId!);

    productService.getProduct(id).subscribe({
      next: (result) => {
        this.product = result;
        console.log(this.product);
      },
      error: (err) => {
        console.log(err);
      }
    });


    //Get product grade
    productService.getGrade().subscribe({
      next: (results)=> {
        this.grades = results;
        console.log(this.grades)
      }, 
      error: (err) => {
        console.log(err);
      }
    });


    //Get product subject
    productService.getSubject().subscribe({
      next: (results)=> {
        this.subjects = results;
      }, 
      error: (err) => {
        console.log(err);
      }
    });


    //Get product type
    productService.getType().subscribe({
      next: (results)=> {
        this.types = results;
      }, 
      error: (err) => {
        console.log(err);
      }
    });


  }

  returnToShop(){
    this.router.navigateByUrl('/shop'); 
  }

  //Cart Functions
  // addToCart(product: Iproduct){
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  addToCart(product: Iproduct){
    if(!this.cartService.productsInCart(product)){
      this.cartService.addToCart(product);
      this.productsList = [...this.cartService.getItems()];
      this.subTotal = product.price;
      window.alert('Your product has been added to the cart!');

    }
  }

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

}
