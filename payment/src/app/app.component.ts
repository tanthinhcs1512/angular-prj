import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'payment-widget';
  payment: boolean = false;

  onClick(e: Event, isPayment: boolean) {
    e.preventDefault();
    this.payment = false;
    if (isPayment) {
      this.payment = true; 
    }
  }
}
