import { RouterConfig } from "@angular/router";
import { VoteSuccessComponent } from "./vote-success.component";
import { OrderListComponent } from "./order-list.component";

export const USERS_ROUTES: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'cart-list'  },
  { path: 'vote-success', component: VoteSuccessComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'vote-success', component: VoteSuccessComponent },
];
