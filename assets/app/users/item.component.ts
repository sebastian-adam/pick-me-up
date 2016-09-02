import { Input, Component } from "@angular/core";
import {Item} from "./item";

@Component({
  selector: 'menu-item',
  template: `
    <div>
      <h4>{{item.name}} ------------- \${{item.price}}</h4>
    </div>
  `,
})
export class ItemComponent {
  @Input() item: Item;
}
