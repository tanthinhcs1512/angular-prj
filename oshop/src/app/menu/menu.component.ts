import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  category$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { 
    this.category$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

}
