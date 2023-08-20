import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';


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
salePercent = '25%';
BTS1 = "https://ecdn.teacherspayteachers.com/thumbitem/Middle-School-Back-to-School-Math-Activities-8320756-1667602447/original-8320756-1.jpg";
BTS2 = "https://ecdn.teacherspayteachers.com/thumbitem/Decimal-Math-Reading-and-Ordering-from-a-Menu-Print-Digital--5887501-1667694949/original-5887501-1.jpg";
BTS3 = "https://ecdn.teacherspayteachers.com/thumbitem/Stock-Market-Game-A-Financial-Literacy-Game-Using-Percent-8556890-1663415073/original-8556890-1.jpg";

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
