import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'admin',
  template: `
    <section>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="password">Password</label>
          <input formControlName="password" type="text" id="password">
        </div>
      <button type="submit" [disabled]="!myForm.valid">Continue to Admin Portal</button>
    </form>
  </section>
  `
})
export class AdminVerifyComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb:FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    var password = this.myForm.value.password;
    if (password === "admin") {
      this.router.navigate(['/admin/admin-portal']);
    } else {
      alert('If you are not an admin, please login through "Account" to get started.')
    }
  }

}
