import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product$: Observable<Product[]>;

  constructor(private productService: ProductService) { 
    this.product$ = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
