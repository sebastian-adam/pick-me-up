import { RouterConfig } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTHENTICATION_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent }
];
