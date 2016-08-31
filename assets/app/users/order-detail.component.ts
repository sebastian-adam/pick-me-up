import { Input, Component } from "@angular/core";
import {Order} from "./order";
import {OrderService} from "./order.service";

@Component({
  selector: 'order-detail',
  template: `
    <div>
      <h4>{{order.name}}....\${{order.price}}</h4>
    </div>
  `,
})
export class OrderDetailComponent {
  @Input() order: Order;

  constructor(private orderService: OrderService){}
}
