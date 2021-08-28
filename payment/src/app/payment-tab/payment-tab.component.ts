import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'payment-tab',
  templateUrl: './payment-tab.component.html',
  styleUrls: ['./payment-tab.component.scss']
})
export class PaymentTabComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
