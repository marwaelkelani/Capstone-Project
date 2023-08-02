import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  math = './assets/calculator.png';
  science = './assets/science.png';
  art = './assets/paint-palette.png';
  tech= './assets/tech.png';
  products!: Iproduct[]

  constructor(private route: ActivatedRoute, private productService: ProductsService){
    productService.getProducts().subscribe({
      next: (results)=>{
        this.products = results;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }



}
