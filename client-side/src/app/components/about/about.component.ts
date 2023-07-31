import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
profile = '../assets/aboutimg.png'
contactForm!: FormGroup;
redColor='red';

constructor(private fb:FormBuilder){
  this.contactForm = fb.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
}

get first_name(){
  return this.contactForm.get('first_name')!;
}

get last_name(){
  return this.contactForm.get('last_name')!;
}

get email(){
  return this.contactForm.get('email')!;
}

get message(){
  return this.contactForm.get('message')!;
}


// TODO: Complete this function when your database are service are created
onMessage(){
}

}
