import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { LogoutComponent } from "./auth/logout.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [AppComponent, SigninComponent, SignupComponent, LogoutComponent, AuthenticationComponent],
    imports: [BrowserModule, HttpModule, ROUTING, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    providers: [AuthService]
})
export class AppModule {

}
