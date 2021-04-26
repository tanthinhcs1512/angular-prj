import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Category } from './category.model';

@Injectable({providedIn: "root"})
export class CategoryService {
    private categories: Category[] = [
        {id: 'bread', name: 'Bread'}, 
        {id: 'dairy', name: 'Dairy'}, 
        {id: 'fruits', name: 'Fruits'}, 
        {id: 'seasonings', name: 'Seasonings and Spices'},
        {id: 'vagetables', name: 'Vegetables'}
    ];

    getCategories(): Observable<Category[]> {
        return observableOf(this.categories);
    }

}