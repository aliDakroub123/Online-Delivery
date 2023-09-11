import { CartItem } from './../models/cart-item.model';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Items } from '../models/items.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems:any[]=[];
  price:any;
  total:number=0;

  user:any[]=[];

  id:any;

  loginbtn :any;
  order:any;
  constructor(private shoppingCartService: ShoppingCartService,private dataService:UserService) {
    dataService.getLoggedInName.subscribe(name=> this.changeName(name));
    if(this.dataService.isLoggedIn()){
      console.log("loggedin");
      this.loginbtn=false
      this.order=true;
    }
    else{
      this.loginbtn=true;
      this.order=false;
    }
   }
   private changeName(name:boolean):void{
    this.order=name;
    this.loginbtn= !name;
   }
  ngOnInit(): void {
    this.getCartItems();
    this.getUser()
  }
 /* items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    return this.shoppingCartService.clear();
  }
 
  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }
 
  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }*/

  addamount(index:number) {
    this.cartItems[index].quantity++;
    this.getTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
  }

  minusamount(index:number) {
    this.cartItems[index].quantity--;
    this.getTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
      
    }
    detectChange(){
      this.getTotal();
      localStorage.setItem("cart",JSON.stringify(this.cartItems));
    }
  getCartItems(){
    if("cart" in localStorage){
      this.cartItems=JSON.parse(localStorage.getItem("cart")!);
      
    }
    this.getTotal()
    console.log(this.cartItems);
   
  }
getTotal(){
  this.total=0;
  for(let x in this.cartItems){
    this.total+= this.cartItems[x].price* this.cartItems[x].quantity;
    
 }
}
deleteItem(index:number){
this.cartItems.splice(index,1)
this.getTotal();
localStorage.setItem("cart",JSON.stringify(this.cartItems));
}

clearCart(){
  this.cartItems=[];
  this.getTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartItems));
}


getUser(){
  if("user" in localStorage){
    this.user=JSON.parse(localStorage.getItem("user")!);
   
  }
  for(let x in this.user){
    console.log(this.user[x].id)
    this.id=this.user[x].id
  }
  console.log(this.id)
  console.log(this.user)
}
}
