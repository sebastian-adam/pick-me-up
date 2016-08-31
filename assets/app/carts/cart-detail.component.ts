import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { Cart } from "./cart";
import { CartService } from "./cart.service";

@Component({
  selector: 'cart-detail',
  template: `
    <article>
      <div>
        {{ cart.name }}
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

  onSubmit() {
    this.router.navigate(['/carts/vote-success']);
  }
}
