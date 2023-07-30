import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salePercent = '10%';
  banner = "./assets/SVBanner.png";
  math = './assets/calculator.png';
  science = './assets/science.png';
  art = './assets/paint-palette.png';
  finance = './assets/budget.png';
}
