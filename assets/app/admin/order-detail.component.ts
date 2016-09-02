import {Input, Component, OnInit } from "@angular/core";
import {Order} from "./order";
import {OrderService} from "./order.service";

@Component({
  selector: 'order-detail',
  template: `
      <div class="well">
        <b>{{order.user.name}}</b> wants the <b>{{order.item.name}}</b>
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
