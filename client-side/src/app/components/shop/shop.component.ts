import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Igrades } from 'src/app/interfaces/igrades';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Isubject } from 'src/app/interfaces/isubject';
import { Itype } from 'src/app/interfaces/itype';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  // imports: [MatPaginatorModule]
})
export class ShopComponent {
  products!: Iproduct[];
  id!: number;
  product!: Iproduct;
  types!: Itype[];
  grades!: Igrades[];
  subjects!: Isubject[];
  


  //Filter Subject Buttons
  filterForm!: FormGroup
  math!: Isubject;
  science!: Isubject;
  art!: Isubject;
  technology!: Isubject

  //Cart
  productsList: any[] = [];
  subTotal!: any;
  subAmount!: any;
  cartValue!: any;



  constructor(private productService: ProductsService, private routeService: ActivatedRoute, fb: FormBuilder, private cartService: ShoppingCartService) {
    //Filter Form
    this.filterForm = fb.group({
      grade_number: ['', Validators.required],
      subject_name: ['', Validators.required],
      type_name: ['', Validators.required]
    });


    ///GRID SECTION
    //Get Products to Show on the Shop Grid
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

    ///FILTER SECTION
    //Get Subjects for filter section
    productService.getSubject().subscribe({
      next: (results) => {
        this.subjects = results;
      },
      error: (err) => {
        console.log(err);
      }
    });


    //Get product grade for filter section
    productService.getGrade().subscribe({
      next: (results) => {
        this.grades = results;
      },
      error: (err) => {
        console.log(err);
      }
    });


    //Get Types to show in filter section
    productService.getType().subscribe({
      next: (results) => {
        this.types = results;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  onClick() {
    this.productService.getProducts(this.filterForm.value).subscribe({
      next: (results) => {
        this.products = results;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


   //Getters for filterForm
   get grade() {
    return this.filterForm.get('grade')!;
  }

  get subject() {
    return this.filterForm.get('subject')!;
  }

  get type() {
    return this.filterForm.get('type')!;
  }
  //SHOPPING CART 
  ///Add product to cart

  ngOnInit(){
    this.cartService.getAllProducts().subscribe({
      next: (results: any)=>{
        console.log(results);
        this.productsList = results;
      }, 
      error: (err)=>{
        alert(err);
      }
    });

    this.cartService.loadCart();
    this.products = this.cartService.getItems();
}

  addToCart(product: Iproduct){
    // console.log(product)
    window.alert('This product has been added to the cart!');

    if(!this.cartService.productsInCart(product)){
      this.cartService.addToCart(product);
      this.productsList = [...this.cartService.getItems()];
      this.subTotal = product.price;
    }
    this.cartNumberFunc()
  }

    //Cart Number Update
    cartNumber: number = 0;
    cartNumberFunc(){
      this.cartValue = JSON.parse(localStorage.getItem('cart_items') as any);
      this.cartNumber = this.cartValue.length;
      this.cartService.cartSubject.next(this.cartNumber);
    }

    //Change sub total amount
    changeSubTotal(product: Iproduct, index: any){
      const qty = product.quantity;
      const amt = product.price;
      this.subTotal = amt * qty;  
      this.cartService.saveCart();
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

 
}

