import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
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
        <form (ngSubmit)="onSubmit()">
          <button type="submit">VOTE</button>
        </form>
      </div>
    </article>
  `
})
export class CartDetailComponent {
  @Input() cart:Cart;

  constructor(private cartService: CartService, private router: Router) {}

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

  onSubmit() {
    this.router.navigate(['/carts/vote-success']);
  }
}
