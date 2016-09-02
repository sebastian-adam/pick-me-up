import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <div class="panel">
      <h1>Pick Me Up</h1>
    </div>
    <br>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

}
