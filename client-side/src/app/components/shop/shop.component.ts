import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { Igrades } from 'src/app/interfaces/igrades';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Isubject } from 'src/app/interfaces/isubject';
import { Itype } from 'src/app/interfaces/itype';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
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


  constructor(private productService: ProductsService, private routeService: ActivatedRoute, fb:FormBuilder){
    //Filter Form
    this.filterForm = fb.group({
      grade_number: ['', Validators.required],
      subject_name: ['', Validators.required],
      type_name: ['', Validators.required]
    });


    //Get Products to Show on the Shop Grid
    productService.getProducts().subscribe({
      next: (results)=>{
        this.products= results;
      },
      error: (err)=>{
        console.log(err);
      }
    });


    //Get Subjects for filter section
    productService.getSubject().subscribe({
      next: (results)=>{
        this.subjects = results;
      },
      error: (err)=>{
        console.log(err);
      }
    });



    //Get product grade for filter section
    productService.getGrade().subscribe({
      next: (results)=> {
        this.grades = results;
        console.log(this.grades)
      }, 
      error: (err) => {
        console.log(err);
      }
    });
    

    //Get Types to show in filter section
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

  onClick(){
    this.productService.getProducts(this.filterForm.value).subscribe({
      next: (results)=>{
        this.products = results;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  //Getters for filterForm
  get grade(){
    return this.filterForm.get('grade')!;
  }

  get subject(){
    return this.filterForm.get('subject')!;
  }

  get type(){
    return this.filterForm.get('type')!;
  }
}
