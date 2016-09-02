import { Component } from "@angular/core";
import {Router} from '@angular/router';
import {CartService} from '../users/cart.service';
import {OrderService} from './order.service';

@Component({
  selector: 'admin-portal',
  template: `
    <div>
      <cart-votes-list></cart-votes-list>
    </div>
    <div>
      <br>
      <button class="btn btn-warning" (click)="closeOrdering()">Close Ordering</button>
      <button class="btn btn-danger" (click)="reset()">reset</button>
    </div>
  `
})
export class AdminPortalComponent {

  constructor(private router: Router, private cartService: CartService, private orderService: OrderService){
    if(localStorage.getItem('closeOrdering')){
      this.router.navigate(['/admin/order-list'])
    }
  }


  closeOrdering(){
    console.log("close ordering");
    localStorage.setItem('closeOrdering', 'true');
    this.router.navigate(['/admin/order-list']);
  }
  reset(){
    console.log("reset app");
    this.cartService.resetVotes()
      .subscribe(response => {
        console.log(response);
      },
        error => console.log('Youz got another error playboi')
    );
    this.cartService.getCarts();
    //this.orderService.resetOrders();
    localStorage.clear();

  }
}
