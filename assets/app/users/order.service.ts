import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../auth/user'
import {Item} from './item';
import {Order} from './order';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class OrderService {

  orders: Order[] = [];

  constructor (private _http: Http){}

  getOrders(){

  }

}
