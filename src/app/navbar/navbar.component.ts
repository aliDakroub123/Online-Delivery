import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItems:any[]=[];
  users:any;
  constructor(public service:UserService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.getUser();
  }
  getCartItems(){
    if("cart" in localStorage){
      this.cartItems=JSON.parse(localStorage.getItem("cart")!);
      
    }
  
   
  }
  getUser(){
    if("user" in localStorage){
      this.users=JSON.parse(localStorage.getItem("user")!);
     
    }
   
  
    console.log(this.users)
  }
}
