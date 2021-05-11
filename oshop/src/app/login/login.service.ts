import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { User } from './user.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private data: User[] = [
    { email: 'tanthinh.cs1512@gmail.com', password: '123456' },
  ];

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  onCheckLogin(email: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:8080/oshop/login', {
      email: email,
      password: password,
    });
  }
}
