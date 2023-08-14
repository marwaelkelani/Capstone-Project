import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ProductComponent,
    CheckoutComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
