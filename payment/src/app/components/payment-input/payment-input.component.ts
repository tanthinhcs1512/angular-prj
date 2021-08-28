import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { InputRefDirective } from '../..//input-ref.directive';

@Component({
  selector: 'payment-input',
  templateUrl: './payment-input.component.html',
  styleUrls: ['./payment-input.component.scss']
})
export class PaymentInputComponent implements OnInit, AfterContentInit {

  @Input()
  iconInput: string;

  @ContentChild(InputRefDirective, {static: false})
  input: InputRefDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    if (!this.input) {
      console.error("We need a input");
    }
  }

}
