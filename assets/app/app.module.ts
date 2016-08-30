import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [AppComponent, SigninComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [AuthService]
})
export class AppModule {

}
