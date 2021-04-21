import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

@Injectable({providedIn: "root"})
export class LocalStorageService {

    private NAME_TOKEN: string = "jwtToken";
    
    getEmail(): Observable<string> {
        return observableOf(window.localStorage[this.NAME_TOKEN]);
    }

    saveEmail(email: string) {
        window.localStorage[this.NAME_TOKEN] = email;
    }

    destroyEmail() {
        window.localStorage.removeItem(this.NAME_TOKEN);
    }

}