import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Cart} from './cart';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class CartService {

  carts: Cart[] = [];

  constructor (private _http: Http){}

  getCarts(cart: Cart){
    this._http.get('http://localhost:3000/carts')
      .map(
        response => {
          const data = response.json().obj;
          let obj: any[] = [];
          for(let i = 0; i < data.length; i++){
            let cart = new Cart(data[i].name, data[i].phone, data[i].location, data[i].vote);
            obj.push(cart);
          }
          return obj;
        })
        .catch(error => Observable.throw(error));
  }

}
