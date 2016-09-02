import { Component, OnInit } from "@angular/core";
import { Cart } from "./cart";
import { CartService } from "./cart.service";

@Component({
  selector: 'cart-list',
  template: `
    <h1>Vote for Today's Cart!</h1>
    <section>
       <cart-detail *ngFor="let cart of carts" [cart]="cart"></cart-detail>
    </section>
  `
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService) {}

  carts: Cart[] = [];

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
