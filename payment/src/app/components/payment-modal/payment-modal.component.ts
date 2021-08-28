import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PaymentModalService } from '../../payment-modal.service';

@Component({
  selector: 'payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnEsc: boolean = true;

  @Input()
  hideOnClickOutlet: boolean = true;

  constructor(private paymentModalService: PaymentModalService) { }

  ngOnInit(): void {
  }

  onClickOutsideModal() {
    if (this.hideOnClickOutlet) {
      this.paymentModalService.close();
    }
  }

  onCancelClick(evn: MouseEvent) {
    evn.preventDefault();
    evn.stopPropagation();
  }

  onCloseModal() {
    this.paymentModalService.close();
  }
  

}
