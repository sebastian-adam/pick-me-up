import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user";

@Component({
  selector: 'sign-up',
  template: `
    <section>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="name">Name</label>
          <input formControlName="name" id="name">
        </div>
        <div>
          <label for="email">Email</label>
          <input formControlName="email" type="email" id="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input formControlName="password" type="password" id="password">
        </div>
        <button type="submit" [disabled]="!myForm.valid">Sign Up</button>
      </form>
    </section>
  `
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.name);
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.router.navigate([''])
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required]
    });
  }

  private isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
        return {invalidMail: true};
    }
  }
}
