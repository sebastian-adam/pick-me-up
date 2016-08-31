import { Component } from "@angular/core";

@Component({
  selector: 'admin-portal',
  template: `
    <div>
      <cart-votes-list></cart-votes-list>
    </div>
    <div>
      <h3>Orders Recieved: ???</h3>
      <button>Close Ordering</button>
    </div>
  `
})
export class AdminPortalComponent {

}
