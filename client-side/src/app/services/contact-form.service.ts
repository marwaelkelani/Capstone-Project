import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient ) {
   }

   sendMessage(newMessage:any){
    return this.http.post<Contact>('http://localhost:4000/contact', newMessage);
   }
  }
