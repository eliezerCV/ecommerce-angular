import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // <-- Importado

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { ProductComponent } from './components/product/product.component';
import { FloatingCartComponent } from './components/floating-cart/floating-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { TimelineComponent } from './pages/checkout/timeline/timeline.component';
import { FormShippingComponent } from './pages/checkout/form-shipping/form-shipping.component';
import { FormPaymentComponent } from './pages/checkout/form-payment/form-payment.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ModalFeedbackComponent } from './pages/checkout/modal-feedback/modal-feedback.component';

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
    FormPaymentComponent,
    LoadingComponent,
    ModalFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // <-- Importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
