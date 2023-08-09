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
product1 = '../assets/fullunits.jpg';
product2 = '../assets/Games.jpg';
product3 = '../assets/realworldactivities.jpg';

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
