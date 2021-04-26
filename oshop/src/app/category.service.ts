import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categories } from './categories.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/oshop/categories');
  }
}
