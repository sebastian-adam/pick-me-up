import { RouterModule, Routes } from '@angular/router';

import { AUTHENTICATION_ROUTES } from "./auth/authentication.routes";
import { AuthenticationComponent } from "./auth/authentication.component";
import { USERS_ROUTES } from "./users/user.routes";
import { UsersComponent } from "./users/users.component";
import { CartListComponent } from "./users/cart-list.component";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { AdminComponent } from "./admin/admin.component";


const APP_ROUTES: Routes = [
  { path: '', component: CartListComponent },
  { path: 'auth', component: AuthenticationComponent, children: [
    ...AUTHENTICATION_ROUTES
  ] },
  { path: 'users', component: UsersComponent, children: [
    ...USERS_ROUTES
  ] },
  { path: 'admin', component: AdminComponent, children: [
    ...ADMIN_ROUTES
  ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
