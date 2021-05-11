import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of as observableOf } from 'rxjs';
import { LoginService } from './login.service';

import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error$: Observable<Boolean>;

  @ViewChild('f') slForm: NgForm;

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  onLogin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.loginService
      .onCheckLogin(email, password)
      .pipe(map((data) => data))
      .subscribe((res) => {
        this.localStorageService.saveUser({
          email: res.email,
          password: res.password,
          admin: res.admin,
        });
      });
  }
}
