import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Product } from './product.model';
import { User } from './login/user.model';
import { UserResponse } from './user-response.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private NAME_TOKEN: string = 'jwtToken';

  getUser(): Observable<UserResponse> {
    return observableOf(window.localStorage[this.NAME_TOKEN]);
  }

  saveUser(user: UserResponse) {
    window.localStorage[this.NAME_TOKEN] = user.email;
  }

  destroyUser() {
    window.localStorage.removeItem(this.NAME_TOKEN);
  }
}
