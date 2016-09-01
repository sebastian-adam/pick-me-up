import { Input, Component } from "@angular/core";
import { Order } from "./order";
import { Item } from "./item";

@Component({
  selector: 'menu-item',
  template: `
    <div>
      <h4>{{item.name}}....\${{item.price}}</h4>
    </div>
  `,
})
export class MenuListComponent {
  @Input() item: Item;
}
