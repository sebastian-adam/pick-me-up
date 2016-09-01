import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { LogoutComponent } from "./auth/logout.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { CartDetailComponent } from "./users/cart-detail.component";
import { ItemComponent } from "./users/item.component";
import { CartListComponent } from "./users/cart-list.component";
import { OrderListComponent } from "./admin/order-list.component";
import { OrderDetailComponent } from "./admin/order-detail.component";
import { UsersComponent } from "./users/users.component";
import { VoteSuccessComponent } from "./users/vote-success.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminVerifyComponent } from "./admin/admin-verify.component";
import { AdminPortalComponent } from "./admin/admin-portal.component";
import { CartVotesListComponent } from "./admin/cart-votes-list.component";
import { CartVoteDetailComponent } from "./admin/cart-vote-detail.component";
import { AuthService } from './auth/auth.service';
import { CartService } from './users/cart.service';
import { OrderService} from './admin/order.service'
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";


@NgModule({
    declarations: [AppComponent, NavbarComponent, SigninComponent, SignupComponent, LogoutComponent, AuthenticationComponent, CartDetailComponent, CartListComponent, UsersComponent, VoteSuccessComponent, AdminComponent, AdminVerifyComponent, AdminPortalComponent, CartVotesListComponent, CartVoteDetailComponent, ItemComponent, OrderListComponent, OrderDetailComponent],
    imports: [BrowserModule, HttpModule, ROUTING, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    providers: [AuthService, CartService, OrderService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {

}
