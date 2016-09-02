import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'admin-verify',
  template: `
    <section>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="password">Password</label>
          <input class="form-group" formControlName="password" type="password" id="password">
        </div>
      <button class="btn btn-default" type="submit">Continue to Admin Portal</button>
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
