
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../models/cart-item.model';

import { map } from 'rxjs';
import { Order } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Url = 'http://localhost:8000/orders';
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  constructor(private cartService: ShoppingCartService, 
    private http: HttpClient) { }
 
    private refresh=new Subject<void>();
    get Refreshed(){
      return this.refresh;
    }




    placeOrder(model:any){
      return this.http.post(this.Url,model)
    }

    Order(Order:any):Observable<object> {
      return this.http.post(this.baseUrl+'order.php',Order).pipe(tap(()=>{
this.Refreshed.next();
      }));
    }


    getAll(){
      return this.http.get<Order[]>(this.baseUrl+'getOrders.php');
    }

    deleteOrder(id:any) {
      console.log(id);
      return this.http.delete(this.baseUrl+'deleteOrder.php?id='+id);
      
      }
}
