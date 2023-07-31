import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
heroImg= '../assets/hero.jpg';
free= "https://ecdn.teacherspayteachers.com/thumbitem/Order-of-Operations-BEDMAS-Jigsaw-Puzzles-Digital-for-Google-Slides--7595160-1663713548/original-7595160-1.jpg";
freebieForm: FormGroup;
product1 = 'https://ecdn.teacherspayteachers.com/thumbitem/Exchange-Rate-Currency-Conversions-Grade-7-and-8-Financial-Literacy-7613911-1674659951/original-7613911-1.jpg';
product2 = 'https://ecdn.teacherspayteachers.com/thumbitem/Grade-7-Measurement-Unit-Ontario-2020-Math-Curriculum--9213670-1679389925/original-9213670-1.jpg';
product3 = 'https://ecdn.teacherspayteachers.com/thumbitem/Area-of-Composite-Figures-Home-Renovation-Project-8393352-1674926473/original-8393352-1.jpg';

constructor(private fb: FormBuilder){
  this.freebieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]]
  });


}

onSubmit(){
  console.log(this.freebieForm.value)
  alert('Thank you! Your email has been sent!');
}

get name(){
  return this.freebieForm.get('name')!;
};

get email(){
  return this.freebieForm.get('email')!;
};
}
