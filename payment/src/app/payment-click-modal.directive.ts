import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PaymentModalService } from './payment-modal.service';

@Directive({
  selector: '[paymentClickModal]'
})
export class PaymentClickModalDirective implements OnInit, OnDestroy {

  elements: HTMLBaseElement[];

  constructor(private templateRef: TemplateRef<any>,
     private viewContainer: ViewContainerRef, 
     private paymentModalService: PaymentModalService) { }

  ngOnInit() {
    this.paymentModalService.close$.subscribe(res => this.viewContainer.clear());
  }

  ngOnDestroy() {
    this.elements.forEach(e => e.removeEventListener('click', this.clickHandeler));
  }

  @Input()
  set paymentClickModal(els: any) {
    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }
    this.elements.forEach(el => {
      el.addEventListener('click', () => {
        this.clickHandeler();
      });
    });
  }

  clickHandeler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

}
