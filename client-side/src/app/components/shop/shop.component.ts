import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Igrades } from 'src/app/interfaces/igrades';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Itype } from 'src/app/interfaces/itype';
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
  types!: Itype[];
  grades!: Igrades[];

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
    

    //Get Types to show in filter dropdown
    productService.getType().subscribe({
      next: (results)=>{
        this.types=results;
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
