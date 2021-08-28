import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/modals/breadcrumb.modal';

@Component({
  selector: 'app-payment-breadcrumb',
  templateUrl: './payment-breadcrumb.component.html',
  styleUrls: ['./payment-breadcrumb.component.scss']
})
export class PaymentBreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];
  currentUrl: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  private setDefaultBreadcrumb() {
  }

}
