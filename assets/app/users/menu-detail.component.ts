import { Input, Component } from "@angular/core";
import { Item } from "./item";
import { Order } from "../admin/order";
import { OrderService } from "../admin/order.service";


@Component({
  selector: 'menu-detail',
  template: `
    <div>
      <menu-item></menu-item>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit(item)">
        <button>Add to my Order</button>
      </form>
    </div>
  `,
})
export class MenuDetailComponent {
  @Input() item: Item;

  constructor(private orderService: OrderService) {}

  onSubmit(item) {
    const order = new Order(item.id, localStorage.getItem('userId'));
    this.orderService.createOrder(order)
    .subscribe(
      response => {
        console.log(response)
      },
      error => console.log('place order error')
    );
  }
}
