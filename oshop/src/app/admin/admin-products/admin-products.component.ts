import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/products.service';
import { LocalStorageService } from '../../local-storage.service';

import { Product } from '../../product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  product$: Observable<Product[]>;

  constructor(private productService: ProductService, private localStorageService: LocalStorageService) {
    this.product$ = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
