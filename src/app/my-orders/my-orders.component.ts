import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
order:any;
baseUrl: string = 'http://localhost:80/The Delivery Master/';   

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log(username)

    const url=`${this.baseUrl+'getOrders.php'}?username=${username}`
    console.log(url);

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
