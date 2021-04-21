import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  email$: Observable<string>;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.email$ = this.localStorageService.getEmail();
  }

  ngOnDestroy() {
  }

}
