import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { User } from './user.model';

@Injectable({providedIn: "root"})
export class LoginService {

    private data: User[] = [
        {email: 'tanthinh@gmail', password: '123456'},
        {email: 'huyenle@gmail', password: '123456'}
    ];

    constructor() {

    }

    onCheckLogin(username: string, password: string): Observable<Boolean> {
        const user = this.data.filter(e => e.email == username && e.password == password);
        if (user != null && user.length > 0) {
            return observableOf(true);
        }
        return observableOf(false);
    }
}