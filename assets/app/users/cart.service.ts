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
  votedCart: Cart;

  constructor (private _http: Http){}

  closeVoting(){
    return this._http.get('https://pick-me-up-mea2n.herokuapp.com/carts/most-voted')
    .map(
      response => {
        const data = response.json();
        console.log(response);

        const cart = new Cart(data.name, data.phone, data.location, data.votes, data._id);

        this.votedCart = cart;
        console.log(this.votedCart);
        localStorage.setItem('votingClosed', 'true');
        return cart;
      })
      .catch( error => Observable.throw(error))
  }

  vote(cart: Cart){
    const body = JSON.stringify(cart)
    const headers = new Headers({'Content-Type': 'application/json'});
    return  this._http.patch("https://pick-me-up-mea2n.herokuapp.com/carts/", body, {headers: headers})
    .map( response => {
      return response.json();
    })
    .catch(error => Observable.throw(error))
  }

  getCarts(){
      return this._http.get('https://pick-me-up-mea2n.herokuapp.com/carts')
      .map(response => {
          const data = response.json().obj;
          let obj: any[] = [];
          for(let i = 0; i < data.length; i++){
            let cart = new Cart(data[i].name, data[i].phone, data[i].location, data[i].votes, data[i]._id);
            obj.push(cart);
          }
          this.carts = obj;
          return obj;
        })
        .catch(error => Observable.throw(error));
  }

  getItems(cart){
    var cartId = cart._id;
    return this._http.get('https://pick-me-up-mea2n.herokuapp.com/carts/menu-items?cart_id=' + cartId)
    .map(response => {
      const data = response.json().obj;
      let obj: any[] = [];
      for(let i = 0; i < data.length; i++){
        let item = new Item(data[i].name, data[i].price, cartId, data[i]._id);
        console.log(item);
        obj.push(item);
      }
      return obj;
    })
    .catch(error => Observable.throw(error));
  }

  resetVotes(){
    console.log('vote reset service');
    const body = JSON.stringify(this.carts[0]);
    return this._http.patch('https://pick-me-up-mea2n.herokuapp.com/carts/reset', body).map(
      response => {
        console.log(response);
      }
    ).catch(error => Observable.throw(error));
  }

}
