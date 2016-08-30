import { Component } from "@angular/core";

import { AuthService } from './auth.service';

@Component({
  selector: 'my-auth',
  template: `
    <header>
      <nav>
        <ul>
          <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
          <li routerLinkActive="active"><a [routerLink]="['signin']" *ngIf="!isLoggedIn()">Signin</a></li>
          <li routerLinkActive="active"><a [routerLink]="['logout']" *ngIf="isLoggedIn()">Logout</a></li>
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
}
