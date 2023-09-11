import { UserService } from './../services/user.service';
import { Component, OnInit , ElementRef} from '@angular/core';
import { OrderService } from '../services/order.service';
import { RestaurantsService } from '../services/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

user:any;
orders:any;
restaurants:any;
  constructor(private users:UserService, private router:Router,private data:OrderService,private rest:RestaurantsService) { 

    }

  
  ngOnInit(): void {
    this.users.getAll().subscribe(
      (result:any)=>{
      console.log(result)
      this.user = result.output;
  });
  this.getOrders();
this.rest.getRestaurants().subscribe(
  (result:any)=>{
  console.log(result)
  this.restaurants = result.output;
})
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
