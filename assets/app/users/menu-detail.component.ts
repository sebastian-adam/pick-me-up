import { Input, Component } from "@angular/core";
import { Item } from "./item";
import { ItemComponent } from "./item.component";
import { Order } from "../admin/order";
import { OrderService } from "../admin/order.service";
//
// String.prototype.toObjectId = function() {
//   var ObjectId = (require('mongoose').Types.ObjectId);
//   return new ObjectId(this.toString());
// };




@Component({
  selector: 'menu-detail',
  template: `
    <div>
      <menu-item [item]=item></menu-item>
      <form (ngSubmit)="onSubmit(item)">
        <button>Add to my Order</button>
      </form>
    </div>
  `,
})
export class MenuDetailComponent {
  @Input() item: Item;

  constructor(private orderService: OrderService) {}

  onSubmit(item) {
    const order = new Order(localStorage.getItem('userId'), item._id);
    console.log(item);
    console.log( localStorage.getItem('userId'));
    console.log(order);
    this.orderService.createOrder(order)
    .subscribe(
      response => {
        console.log(response)
      },
      error => console.log('place order error')
    );
  }
}
