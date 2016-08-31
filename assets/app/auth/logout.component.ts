import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  selector: 'logout',
  template: `
    <section>
      <button (click)="onLogout()">Logout</button>
    </section>
  `
})

export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }
}
