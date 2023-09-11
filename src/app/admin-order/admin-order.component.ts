import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order.model';
@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  order: any;
  array:any;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username)

    const url=`${this.baseUrl+'getOrders.php'}?username=${username}`
    console.log(url);
   /* this.http.get<any[]>(url).subscribe((result:any)=>{
this.array=result;
    });*/
    

    this.http.get<any[]>(this.baseUrl+'getOrders.php?username='+username).subscribe(
      (response) => {
        this.order= response;
        console.log(response)
      },
      
      (error) => {
        console.log(error);
      }
    );
  }

}
