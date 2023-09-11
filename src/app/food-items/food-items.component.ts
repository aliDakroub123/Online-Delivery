import { Items } from './../models/items.model';
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from '../services/restaurants.service';
@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  Restaurants:any;
  menu:any;
  juice:any;
  plates:any;
  sandwich:any;
  desserts:any;
  hotDrinks:any;
  coldDrinks:any;
  Items:any;
 cartItems:any[]=[];
  food:any;
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  menuUrl = 'http://localhost:8000/menu';

  
addButton:boolean=false;
amount:number=0
 
  constructor(private data: RestaurantsService,private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name');
    this.http.get<any[]>(this.baseUrl+'test.php?name='+name).subscribe(
      (response) => {
        this.Restaurants = response;
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );

   
   /* this.http.get<any[]>(this.baseUrl+'getItems.php? name='+name).subscribe(
      (response) => {
      //  this.menu = response;
        this.drinks= response.filter(item => item.category === 'drink');
        this.sandwich = response.filter(item => item.category === 'sandwich');
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );*/




    const url=`${this.menuUrl}?restaurantId=${name}`;
    console.log(url)
    this.http.get<Items[]>(url).subscribe(
      (response) => {
        this.plates= response.filter(item => item.category === 'plate');
        this.sandwich = response.filter(item => item.category === 'sandwiches');
        this.juice = response.filter(item => item.category === 'juice');
        this.coldDrinks = response.filter(item => item.category === 'coldDrinks');
        this.hotDrinks = response.filter(item => item.category === 'hotDrinks');
        
        this.menu = response;
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );

    this.http.get<Items[]>(url).subscribe(
      (response) => {
        this.Items = response;
        
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );

  }

  addToCart(item:any){
 console.log(item);


// if("cart" in localStorage){
 /* this.cartItems=JSON.parse(localStorage.getItem("cart")!);
  if(this.cartItems==null){
    let cart:any=[];
  cart.push(item);
  localStorage.setItem("cart",JSON.stringify(cart));
  }else{
    var id =item.Id
    let index:number=-1;
    this.itemsCart=JSON.parse(localStorage.getItem('cart')!);
    for(let i=0;i<this.itemsCart.length;i++){
      if(parseInt(id)===parseInt(this.itemsCart[i].id)){
        index=1
      }
    }
    if(index== -1){
      this.itemsCart.push(item);
      localStorage.setItem("cart",JSON.stringify(this.itemsCart));
    }else{
      localStorage.setItem("cart",JSON.stringify(this.itemsCart));
    }
  }*/
  
 //}else{
  //this.cartItems.push(item);
  //localStorage.setItem("cart",JSON.stringify(item));
 //}

 if("cart" in localStorage){

  this.cartItems=JSON.parse(localStorage.getItem("cart")!);
  let exist =this.cartItems.find(food=>food.id==item.id);
  if(exist){
    alert("product is already in your cart");
  }else{

    this.cartItems.push(item);

    localStorage.setItem("cart",JSON.stringify(this.cartItems));
    alert("your item is added");
  // location.reload();
  }

 }
 else{
  this.cartItems.push(item);
 
  localStorage.setItem("cart",JSON.stringify(this.cartItems));
 
 }
  }

}
