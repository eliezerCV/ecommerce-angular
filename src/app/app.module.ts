import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ProductComponent } from './components/product/product.component';
import { FloatingCartComponent } from './components/floating-cart/floating-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    ProductComponent,
    FloatingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
