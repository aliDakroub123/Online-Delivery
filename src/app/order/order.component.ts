import { OrderService } from './../services/order.service';
import { Restaurant } from './../models/restaurants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  checkoutForm: any;

  user:any[]=[];
  id:any;
  cartItems:any;
  total:number=0
cost:number=2;
price:number=0
  success:boolean=false;
  constructor(private fb: FormBuilder,private service:OrderService,private router:Router) { }





  ngOnInit(): void {
    this.getCartItems();
    this.getUser()

   /* this.checkoutForm = this.fb.group({
      details: [null],
      
    })*/
  

    this.checkoutForm = new FormGroup({
      id: new FormControl('',[]),
      f_name: new FormControl( '', Validators.required),  
      l_name: new FormControl( '', Validators.required), 
      username:new FormControl('', [Validators.required, Validators.maxLength(20)]), 
       
      address:new FormControl ('', [Validators.required, Validators.maxLength(100)]) ,  
      phone:new FormControl('', [Validators.required, Validators.maxLength(20)] ),
      details:new FormControl( [null]),
      r_name: new FormControl( '', Validators.required), 
      total: new FormControl( '', Validators.required), 
    })
    
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
    this.total+= this.cartItems[x].price* this.cartItems[x].quantity ;
    
 }
 this.price=this.total+this.cost
 console.log(this.price)
 console.log(this.total);
}

getUser(){
  if("user" in localStorage){
    this.user=JSON.parse(localStorage.getItem("user")!);
   
  }
  for(let x in this.user){
    console.log(this.user[x].id)

    this.id=this.user[x].id
  }

  console.log(this.user)
}

addCart(){
  let products=this.cartItems.map((item:any)=>{
    return {productId:item.id,quantity:item.quantity,Restaurant:item.restaurantId}
  })
  let Model={
    userId:this.id,
    date:new Date(),
    details:this.checkoutForm.value.details,
    products:products,
    Total:this.total
  };

  this.service.placeOrder(Model).subscribe(res=>{
    this.success=true;

  })
  console.log(Model)

  this.service.Order(this.checkoutForm.value).subscribe((data:any)=>{console.log(data)},
    error=>{
      alert(error);
    });
}
}
