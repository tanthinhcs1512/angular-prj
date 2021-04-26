import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user$: Observable<any>;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.user$ = this.localStorageService.getUser();
  }

  ngOnDestroy() {}
}
