import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemComponent } from "./item.component";
import { Cart } from "./cart";
import { CartService } from "./cart.service";

@Component({
  selector: 'menu-list',
  template: `
    <h1>this is the menu list!</h1>
    <section>
       <menu-detail *ngFor="let item of items" [item]="item"></menu-detail>
    </section>
  `
})
export class MenuListComponent implements OnInit {
  constructor(private cartService: CartService) {}

  items: Item[] = [];

  ngOnInit() {
    this.cartService.getItems(this.cartService.votedCart)
      .subscribe(
        items => {
          this.items = items;
        },
        error => console.log('cannot get carts error')
      );
  }
}
