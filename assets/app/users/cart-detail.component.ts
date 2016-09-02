import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { Cart } from "./cart";
import { Item } from "./item";
import { ItemComponent } from "./item.component";
import { CartService } from "./cart.service";

@Component({
  selector: 'cart-detail',
  template: `
  <article>
    <div class="jumbotron">
      <h2>{{ cart.name }}</h2>
      <h3>{{cart.votes}} votes!</h3>
      <button class="btn btn-info" (click)="showItems(cart)">Show Menu</button>
      <form *ngIf="!this.voted" (ngSubmit)="onSubmit(cart)">
        <button class="btn btn-success" type="submit">VOTE</button>
      </form>
      <div *ngIf="this.expanded">
        <menu-item *ngFor="let item of items" [item]="item"></menu-item>
      </div>
    </div>
  </article>
  `
})
export class CartDetailComponent {
  @Input() cart:Cart;
  voted = localStorage.getItem('voted');

  constructor(private cartService: CartService, private router: Router) {
    if(localStorage.getItem('votingClosed')){
      this.router.navigate(['/users/menu-list']);
    }
  }

  items: Item[] = [];
  expanded: Boolean = false;

  showItems(cart) {
    console.log(cart);
    this.cartService.getItems(cart)
      .subscribe(
        items => {
          this.items = items;
          this.cartService.items = items;
          console.log(this.items);
        },
        error => console.log('im an error')
      );
    this.expanded = true;
  }

  onSubmit(cart) {
    this.cartService.vote(cart)
    .subscribe(
      response => {
        localStorage.setItem('voted', 'true');
        console.log(response);
      },
      error => console.log('vote error')
    );
    this.router.navigate(['/users/vote-success']);
  }
}
