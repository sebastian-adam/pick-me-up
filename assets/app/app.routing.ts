import { RouterModule, Routes } from '@angular/router';

import { AUTHENTICATION_ROUTES } from "./auth/authentication.routes";
import { AuthenticationComponent } from "./auth/authentication.component";
import { CartListComponent } from "./carts/cart-list.component";

const APP_ROUTES: Routes = [
  { path: '', component: CartListComponent},
  { path: 'auth', component: AuthenticationComponent, children: [
    ...AUTHENTICATION_ROUTES
  ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
