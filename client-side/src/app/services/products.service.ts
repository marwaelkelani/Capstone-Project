import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Isubject } from '../interfaces/isubject';
import { Itype } from '../interfaces/itype';
import { Igrades } from '../interfaces/igrades';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<Iproduct[]>('http://localhost:4000/products');
  }

  getProduct(id: number){
    return this.httpClient.get<Iproduct>(`http://localhost:4000/products/${id}`);
  }

  getSubject(){
    return this.httpClient.get<Isubject[]>('http://localhost:4000/subjects');
  }

  getType(){
    return this.httpClient.get<Itype[]>('http://localhost:4000/types');
  }

  getGrade(){
    return this.httpClient.get<Igrades[]>('http://localhost:4000/grades');
  }
}
