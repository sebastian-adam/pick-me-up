import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="panel">
      <h1>Hello World</h1>
    </div>
    <br>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

}
