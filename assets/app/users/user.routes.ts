import { RouterConfig } from "@angular/router";
import { VoteSuccessComponent } from "./vote-success.component";

export const USERS_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'cart-list' },
  { path: 'vote-success', component: VoteSuccessComponent }
];
