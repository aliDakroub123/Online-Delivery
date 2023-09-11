import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Items } from '../models/items.model';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from '../services/restaurants.service';
@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  Restaurants:any;
  menu:any;
  juice:any;
  plates:any;
  sandwich:any;
  desserts:any;
  hotDrinks:any;
  coldDrinks:any;
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  menuUrl = 'http://localhost:8000/menu';
  @Input() items:any;
  @Output() add = new EventEmitter();

 
  constructor(private data: RestaurantsService,private route: ActivatedRoute,private http: HttpClient) { 
  }

  emitAddEvent(){
    this.add.emit(this.items);
  }
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


   /* this.http.get<any[]>(this.baseUrl+'getItems.php? name='+name).subscribe((data: any[]) => {
      this.menu = data.reduce((acc, item) => {
        const index = acc.findIndex((category: { name: any; }) => category.name === item.category);
        if (index === -1) {
          acc.push({
            name: item.category,
            items: [item]
          });
        } else {
          acc[index].items.push(item);
        }
        return acc;
        
      }, []);
     
    });*/





  }
  addToCart(){
  
  }
}

