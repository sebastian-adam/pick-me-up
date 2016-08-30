import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from
"@angular/forms";
import {User} from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'sign-in',
  template: `
    <section>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="email">Email</label>
          <input formControlName="email" type="text" id="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input formControlName="password" type="password" id="password">
        </div>
      <button type="submit" [disabled]="!myForm.valid">Sign In</button>
    </form>
  </section>
  `
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb:FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      password: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
    });
  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
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

  private isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
      return {invalidMail: true};
    }
  }
}
