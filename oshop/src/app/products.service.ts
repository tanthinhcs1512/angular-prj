import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Category } from './category.model';
import { Product } from './product.model';

@Injectable({providedIn: "root"})
export class ProductService {

    private products: Product[] = [
        {title: 'Chorizo & mozzarella gnocchi bake', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Carrot cake monkey bread', price: 316, category: 'fruits', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Easter simnel cake', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Easy carrot cake', price: 316, category: 'fruits', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Rhubarb, marzipan & citrus cake', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Lemon drizzle cake', price: 316, category: 'fruits', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Easy lemon layer cake', price: 316, category: 'dairy', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Rhubarb crumble cake', price: 316, category: 'fruits', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Hot cross buns', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Rhubarb & custard cake', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Easter egg cookies', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Simnel loaf cake', price: 316, category: 'vagetables', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Rhubarb and ricotta bread & butter pudding', price: 316, category: 'vagetables', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Carrot cake cookies', price: 316, category: 'vagetables', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Simnel battenberg cake', price: 316, category: 'seasonings', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Bara brith', price: 316, category: 'breads', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Bunny carrot cake', price: 316, category: 'seasonings', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'},
        {title: 'Rhubarb & orange cake', price: 316, category: 'seasonings', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'}
    ];

    saveProduct(product: Product): Observable<boolean> {
        this.products = [...this.products, product];
        return observableOf(true);
    }

    getProducts(): Observable<Product[]> {
        return observableOf(this.products);
    }

    getProductsByCategory(idCategory: string) {
        const lst: Product[] = this.products.filter(e => e.category === idCategory);
        if (lst != null && lst.length > 0)
            return observableOf(lst);
        return observableOf(null);
    }

}