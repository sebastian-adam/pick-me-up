import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: 'admin-portal',
  template: `
    <div>
      <cart-votes-list></cart-votes-list>
    </div>
    <div>

      <button (click)="closeOrdering()">Close Ordering</button>
    </div>
  `
})
export class AdminPortalComponent {

  constructor(private router: Router){
    if(localStorage.getItem('closeOrdering')){
      this.router.navigate(['/admin/order-list'])
    }
  }


  closeOrdering(){
    console.log("close ordering");
    localStorage.setItem('closeOrdering', 'true');
    this.router.navigate(['/admin/order-list']);
  }
}
