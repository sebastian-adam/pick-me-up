import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { LogoutComponent } from "./auth/logout.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { CartDetailComponent } from "./carts/cart-detail.component";
import { CartListComponent } from "./carts/cart-list.component";
import { CartsComponent } from "./carts/carts.component";
import { VoteSuccessComponent } from "./carts/vote-success.component";
import { AuthService } from './auth/auth.service';
import { CartService } from './carts/cart.service';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [AppComponent, NavbarComponent, SigninComponent, SignupComponent, LogoutComponent, AuthenticationComponent, CartDetailComponent, CartListComponent, CartsComponent, VoteSuccessComponent],
    imports: [BrowserModule, HttpModule, ROUTING, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    providers: [AuthService, CartService]
})
export class AppModule {

}
