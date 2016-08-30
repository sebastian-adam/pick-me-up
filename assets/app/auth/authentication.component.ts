import { Component } from "@angular/core";

import { AuthService } from './auth.service';

@Component({
  selector: 'my-auth',
  template: `
    <header>
      <nav>
        <ul>
          <li routerLinkActive="active"><a [routerLink]="['/auth/signup']">Signup</a></li>
          <li *ngIf="!isLoggedIn()" routerLinkActive="active"><a [routerLink]="['/auth/signin']">Signin</a></li>
          <li *ngIf="isLoggedIn()" routerLinkActive="active"><a [routerLink]="['/auth/logout']">Logout</a></li>
        </ul>
      </nav>
    </header>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .router-link-active {
      color: #555;
      cursor: default;
      background-color: #fff;
      border: 1px solid #ddd;
      border-bottom-color: transparent;
    }
  `]
})

export class AuthenticationComponent {
  constructor (private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
