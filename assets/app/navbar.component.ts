import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `
    <nav class="navbar navbar-default">
       <div class="container-fluid">
         <div class="navbar-header">
           <a class="navbar-brand" href="#">Pickmeup</a>
         </div>
         <ul class="nav navbar-nav">
           <li routerLinkActive="active"><a [routerLink]="['auth']">Account</a></li>
           <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['']">Order Portal</a></li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
             <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['admin']">Admin</a></li>
         </ul>
       </div>
     </nav>
    `
})
export class NavbarComponent {


}
