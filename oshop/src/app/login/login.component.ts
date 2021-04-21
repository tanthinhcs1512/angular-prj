import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of as observableOf } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error$: Observable<Boolean>;

  @ViewChild('f') slForm: NgForm;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password
    this.loginService.onCheckLogin(email, password).subscribe(res => {
      console.log(res);
      this.error$  = observableOf(res);
    })
  }

}
