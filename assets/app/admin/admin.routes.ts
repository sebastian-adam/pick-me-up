import { RouterConfig } from "@angular/router";
import { AdminVerifyComponent } from "./admin-verify.component";
import { AdminPortalComponent } from "./admin-portal.component";

export const ADMIN_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'admin-verify' },
  { path: 'admin-verify', component: AdminVerifyComponent },
  { path: 'admin-portal', component: AdminPortalComponent }
];
