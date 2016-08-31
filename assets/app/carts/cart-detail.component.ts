import { Component, OnInit, Input } from "@angular/core";

import { Cart } from "./cart";
import { Item } from "./item";
import { CartService } from "./cart.service";

@Component({
  selector: 'cart-detail',
  template: `
    <article>
      <div>
        {{ cart.name }}
        <button (ngClick)="showItems(cart)">Show More</button>
        <button>VOTE</button>
      </div>
    </article>
  `
})
export class CartDetailComponent {
  @Input() cart:Cart;

  constructor(private cartService: CartService) {}

  items: Item[] = [];

  showItems(cart) {
    this.cartService.getItems(cart)
      .subscribe(
        items => {
          this.items = items;
          this.cartService.items = items;
        },
        error => console.log('im an error')
      );
  }
}
