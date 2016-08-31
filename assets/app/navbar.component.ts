import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `

    <ul>
      <li routerLinkActive="active"><a [routerLink]="['auth']">Account</a></li>
      <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['']">Order Portal</a></li>
      <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['admin']">Admin</a></li>
    </ul>
    `
})
export class NavbarComponent {


}
