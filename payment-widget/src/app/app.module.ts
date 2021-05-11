import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentTabComponent } from './payment-tab/payment-tab.component';
import { PaymentTabPanelComponent } from './payment-tab-panel/payment-tab-panel.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { PaymentClickModalDirective } from './payment-click-modal.directive';
import { PaymentInputComponent } from './payment-input/payment-input.component';
import { InputRefDirective } from './input-ref.directive';
import { PaymentMaskDirective } from './payment-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaymentTabComponent,
    PaymentTabPanelComponent,
    PaymentModalComponent,
    PaymentClickModalDirective,
    PaymentInputComponent,
    InputRefDirective,
    PaymentMaskDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
