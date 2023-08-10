import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itype } from '../interfaces/itype';
import { Igrades } from '../interfaces/igrades';
import { Isubject } from '../interfaces/isubject';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor(private httpClient: HttpClient) { }

  filterSubject(){
    let queryParams = new HttpParams();

    return this.httpClient.get<Isubject>('http://localhost:4000/filter/subjects', {params: queryParams})
  }

  filterType(){
    let queryParams = new HttpParams();

    return this.httpClient.get<Itype>('http://localhost:4000/filter/types', {params: queryParams})
  }

  filterGrade(){
    let queryParams = new HttpParams();

    return this.httpClient.get<Igrades>('http://localhost:4000/filter/grades', {params: queryParams})
  }
 
}
