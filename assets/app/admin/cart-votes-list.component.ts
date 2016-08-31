import { Component, OnInit } from '@angular/core';
import { Cart } from '../users/cart';
import { CartService } from '../users/cart.service';

@Component({
  selector: 'cart-votes-list',
  template: `
    <h1>Cart Votes</h1>
    <section>
      <cart-vote-detail *ngFor="let cart of carts" [cart]="cart"></cart-vote-detail>
      <div>
        <button (click)="closeVote()">Close Voting</button>
      </div>
    </section>
  `
})
export class CartVotesListComponent implements OnInit {

  carts: Cart[] = [];
  votedCart: Cart;

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

  closeVote(){
    this.cartService.closeVoting().subscribe(
      response => {
        this.votedCart = response;
        console.log(this.votedCart);
      },
      error => {
        error => console.log('im an error for close voting');
      }
    );
  }
}
