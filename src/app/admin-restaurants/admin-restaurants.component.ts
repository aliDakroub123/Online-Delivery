import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service'; 

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.css']
})
export class AdminRestaurantsComponent implements OnInit {
restaurants:any;
  constructor(private data:RestaurantsService,private router: Router) { }

  ngOnInit(): void {
    this.data.getRestaurants().subscribe(
      (result:any)=>{
      console.log(result)
      this.restaurants = result.output;
      console.log(this.restaurants)
  })
  }
  deleteRest(rest:any){
    this.data.deleteRest(rest.name).subscribe(
      (result:any)=>{
        console.log(result)
      this.restaurants = this.restaurants.filter((u: any) => u !== rest);
    
      })
  }
}
