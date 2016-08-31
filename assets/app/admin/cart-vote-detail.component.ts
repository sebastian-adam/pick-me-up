import { Component, Input } from '@angular/core';
import { Cart } from '../users/cart';

@Component({
  selector: 'cart-vote-detail',
  template: `
    <div>
      {{cart.name}} ..... {{cart.votes}}
    </div>
  `
})
export class CartVoteDetailComponent {
  @Input() cart:Cart;
}
