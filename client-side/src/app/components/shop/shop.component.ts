import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  math = './assets/calculator.png';
  products!: Iproduct[];
  id!: number;
  product!: Iproduct;

  constructor(private productService: ProductsService, private routeService: ActivatedRoute){
    
    //Get Products to Show on the Shop Grid
    productService.getProducts().subscribe({
      next: (results)=>{
        this.products= results;
      },
      error: (err)=>{
        console.log(err);
      }
    });

    //Redirect to specific product from grid
    let productId = this.routeService.snapshot.paramMap.get('id');
    let id = parseInt(productId!);

    productService.getProduct(id).subscribe({
      next: (result)=>{
        this.product = result;
        console.log(this.product);
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

}
