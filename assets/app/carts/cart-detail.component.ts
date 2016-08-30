import { Component, OnInit } from "@angular/core";

import { Cart } from "./cart";
import { CartService } from "./cart.service";

@Component({
  selector: 'cart-detail',
  template: `
    <article>
      <div>
        {{ cart.name }}
        <button>VOTE</button>
      </div>
    </article>
  `
})
export class CartDetailComponent {
  @Input() cart:Cart;

  constructor(private cartService: CartService) {}
}
