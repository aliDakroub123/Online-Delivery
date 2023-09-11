import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders:any;
orders$:any;
  constructor(private data: OrderService,private router: Router) { }

  ngOnInit(): void {
  /*  this.data.getAll().subscribe(
      (result:any)=>{
      console.log(result)
      this.orders = result;
      console.log(this.orders)
  })*/

  this.getOrders();
  this.data.Refreshed.subscribe(response=>{
    this.getOrders();
  });
this.orders$=of(this.orders);
  new Observable(item=>{
    setTimeout(()=>{
      item.next('In Progress')

    },2000);
    setTimeout(()=>{
      item.next('Pending')

    },4000);
    setTimeout(()=>{
      item.next('completed')

    },6000);
  }).subscribe(result=>{
    console.log(result)
  });
  }
  deleteOrder(order:any){
    // console.log(user.id);
    this.data.deleteOrder(order.id).subscribe(
    (result:any)=>{
      console.log(result)
    this.orders = this.orders.filter((u: any) => u !== order);
  
    })
  
    }

    getOrders(){
      this.data.getAll().subscribe(
        (result:any)=>{
        console.log(result)
        this.orders = result;
        console.log(this.orders)
    })
    }
}
