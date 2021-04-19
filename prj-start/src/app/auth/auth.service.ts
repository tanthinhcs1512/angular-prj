import { Injectable } from "@angular/core";
import { Observable, observable, of } from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService {
    signUp(email: string, password: string): Observable<Boolean> {
        return of(true);

    }
}