import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { User } from './user.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({providedIn: "root"})
export class LoginService {

    private data: User[] = [
        {email: 'tanthinh.cs1512@gmail.com', password: '123456'},
    ];

    constructor(private localStorageService: LocalStorageService) {
    }

    onCheckLogin(email: string, password: string): Observable<Boolean> {
        const user = this.data.filter(e => e.email === email && e.password === password);
        if (user != null && user.length > 0) {
            this.localStorageService.saveEmail(email);
            return observableOf(true);
        }
        return observableOf(false);
    }
}