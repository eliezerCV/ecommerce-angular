import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ProductComponent } from './components/product/product.component';
import { FloatingCartComponent } from './components/floating-cart/floating-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { TimelineComponent } from './pages/checkout/timeline/timeline.component';
import { FormShippingComponent } from './pages/checkout/form-shipping/form-shipping.component';
import { FormPaymentComponent } from './pages/checkout/form-payment/form-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    ProductComponent,
    FloatingCartComponent,
    CheckoutComponent,
    TimelineComponent,
    FormShippingComponent,
    FormPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
