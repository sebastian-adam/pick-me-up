import { Component, OnInit } from '@angular/core';
import { Cart } from '../carts/cart';
import { CartService } from '../carts/cart.service';

@Component({
  selector: 'cart-votes-list',
  template: `
    <h1>Cart Votes</h1>
    <section>
      <cart-vote-detail *ngFor="let cart of carts" [cart]="cart"></cart-vote-detail>
    </section>
  `
})
export class CartVotesListComponent implements OnInit {

  carts: Cart[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCarts()
        .subscribe(
        carts => {
          this.carts = carts;
          this.cartService.carts = carts;
        },
        error => console.log('Youz got another error playboi')
      );
  }
}
