import { RouterModule, Routes } from '@angular/router';

import { AUTHENTICATION_ROUTES } from "./auth/authentication.routes";
import { AuthenticationComponent } from "./auth/authentication.component";
import { CARTS_ROUTES } from "./carts/cart.routes";
import { CartsComponent } from "./carts/carts.component";
import { CartListComponent } from "./carts/cart-list.component";


const APP_ROUTES: Routes = [
  { path: '', component: CartListComponent },
  { path: 'auth', component: AuthenticationComponent, children: [
    ...AUTHENTICATION_ROUTES
  ] },
  { path: 'carts', component: CartsComponent, children: [
    ...CARTS_ROUTES
  ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
