import { RouterConfig } from "@angular/router";
import { AdminVerifyComponent } from "./admin-verify.component";
import { AdminPortalComponent } from "./admin-portal.component";
import { OrderListComponent } from "./order-list.component";

export const ADMIN_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'admin-verify' },
  { path: 'admin-verify', component: AdminVerifyComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'admin-portal', component: AdminPortalComponent }
];
