import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Cart} from './cart';
import {Item} from './item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CartService {

  carts: Cart[] = [];
  items: Item[] = [];

  constructor (private _http: Http){}

  vote(cart: Cart){
    console.log('vote component');
    const body = JSON.stringify(cart)
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.patch("http://localhost:3000/carts/", body, {headers: headers})
    .map( response => {
      return response
    })
    .catch(error => Observable.throw(error))
  }

  getCarts(){
      return this._http.get('http://localhost:3000/carts')
      .map(response => {
          const data = response.json().obj;
          let obj: any[] = [];
          for(let i = 0; i < data.length; i++){
            let cart = new Cart(data[i].name, data[i].phone, data[i].location, data[i].vote, data[i]._id);
            obj.push(cart);
          }
          return obj;
        })
        .catch(error => Observable.throw(error));
  }

  getItems(cart){
    var cartId = cart.id;
    return this._http.get('http://localhost:3000/carts/menu-items?cart_id=' + cartId)
    .map(response => {
      const data = response.json().obj;
      let obj: any[] = [];
      for(let i = 0; i < data.length; i++){
        let item = new Item(data[i].name, data[i].price, cartId);
        obj.push(item);
      }
      return obj;
    })
    .catch(error => Observable.throw(error));
  }

}
