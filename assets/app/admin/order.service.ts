import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../auth/user'
import {Item} from '../users/item';
import {Order} from './order';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class OrderService {

  orders: Order[] = [];

  constructor (private _http: Http){}

  getOrders(){
    return this._http.get('https://pick-me-up-mea2n.herokuapp.com/orders').map(
      response => {
        const data = response.json().obj;
        console.log(data);
        let obj: any[] = [];
        for(let i = 0; i < data.length; i++){
          let order = new Order(data[i].user_id, data[i].item_id);
          obj.push(order);
        }
        console.log(obj);
        return obj;
      }).catch( error => Observable.throw(error));
  }

  createOrder(order){
    const body = JSON.stringify(order);
    console.log(body);
    const headers = new Headers({'Content-Type':'application/json'});
    return this._http.post('https://pick-me-up-mea2n.herokuapp.com/orders', body, {headers: headers}).map(
      response => {
        const data = response.json().obj;
        console.log(data);
      }
    ).catch(error => Observable.throw(error));
  }

  reset() {
    return this._http.delete('https://pick-me-up-mea2n.herokuapp.com/orders').map(
      response => {
        console.log(response);
      }
    ).catch(error => Observable.throw(error));
  }

}
