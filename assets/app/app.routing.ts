import { RouterModule, Routes } from '@angular/router';

import { AUTHENTICATION_ROUTES } from "./auth/authentication.routes";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    ...AUTHENTICATION_ROUTES
  ] },
  {path: 'auth', component: AuthenticationComponent, children: [
    ...AUTHENTICATION_ROUTES
  ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
