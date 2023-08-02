import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  math = './assets/calculator.png';
  products!: Iproduct[]

  constructor(private productService: ProductsService){
    productService.getProducts().subscribe({
      next: (results)=>{
        this.products= results;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

}
