import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category.model';
import { Product } from 'src/app/product.model';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../products.service';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.scss']
})
export class AdminProductsFormComponent implements OnInit {

  categoryList$: Observable<Category[]>;

  title: string;

  price: number;

  category: Category;

  imageURL: string;

  constructor(private categoryService: CategoryService, private productService: ProductService, 
    private localStorageService: LocalStorageService) { 
    this.categoryList$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const product: Product = {
      title: f.value.title,
      price: f.value.price,
      category: f.value.category,
      imgUrl: f.value.imageUrl
    }
    this.productService.saveProduct(product);
    f.reset();
  }

}
