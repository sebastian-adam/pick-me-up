import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from './user';

@Component({
  selector: 'sign-in',
  template: `
    <div>
      <h3>Sign In</h3>
      <input name="email" placeholder="email" #email>
      <input name="password" placeholder="password" #password>
      <button (click)="ngSubmit(email, password)">Sign in</button>
    </div>
  `
})
export class SigninComponent {
  constructor(private authService: AuthService) {}

  ngSubmit(email, password) {
    const user = new User(email.value, password.value);
    console.log(email.value);
    console.log(password.value);
    this.authService.signin(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('userName', data.userName);
          localStorage.setItem('userEmail', data.userEmail);
        },
        error => console.log(error)
      );
  }
}
