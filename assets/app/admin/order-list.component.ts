import { Component, OnInit} from "@angular/core";
import { Item } from "../users/item";
import { OrderService } from "./order.service";
import { Order } from "./order";

@Component({
  selector: 'order-list',
  template: `
    <h1>this is Order lists!</h1>
    <section>
       <order-detail *ngFor="let order of orders" [order]=order></order-detail>
       <br>
       <button (click)="resetOrders()">Reset Orders</button>
    </section>
  `
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  resetOrders(){
    this.orderService.reset()
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log('error');
        }
      );
  }

  ngOnInit(){
    this.orderService.getOrders()
      .subscribe(
      orders => {
      console.log(orders);
      this.orders = orders;
      this.orderService.orders = orders;
      },
      error => {
      console.log('error')
    });
  }
}
//*ngFor="let order of orders"
