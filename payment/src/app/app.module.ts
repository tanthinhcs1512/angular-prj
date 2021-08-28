import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app.component';
import { 
  PaymentTabComponent,
  PaymentTabPanelComponent, 
  PaymentModalComponent, 
  PaymentInputComponent 
} from './components';

//Directive
import { PaymentClickModalDirective } from './payment-click-modal.directive';
import { InputRefDirective } from './input-ref.directive';
import { PaymentMaskDirective } from './payment-mask.directive';
import { PaymentBreadcrumbComponent } from './components/payment-breadcrumb/payment-breadcrumb.component';

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
    PaymentBreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
