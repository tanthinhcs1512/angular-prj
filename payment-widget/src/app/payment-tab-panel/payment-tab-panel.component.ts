import { ThrowStmt } from '@angular/compiler';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { PaymentTabComponent } from '../payment-tab/payment-tab.component';

@Component({
  selector: 'payment-tab-panel',
  templateUrl: './payment-tab-panel.component.html',
  styleUrls: ['./payment-tab-panel.component.scss']
})
export class PaymentTabPanelComponent implements OnInit, AfterContentInit {


  @ContentChildren(PaymentTabComponent)
  tabs: QueryList<PaymentTabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectedTab(tab: PaymentTabComponent) {
    this.tabs.forEach(e => e.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
        tabs: this.tabs
    }
  }
}
