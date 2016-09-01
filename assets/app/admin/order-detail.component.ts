import {Input, Component, OnInit } from "@angular/core";
import {Order} from "./order";
import {OrderService} from "./order.service";

@Component({
  selector: 'order-detail',
  template: `
    <div>
      {{order.user.name}}......{{order.item.name}}
    </div>
  `,
})
export class OrderDetailComponent {
  @Input() order: Order;

  constructor(private orderService: OrderService){}
  onInit(){
    console.log(this.order);
  }
}
