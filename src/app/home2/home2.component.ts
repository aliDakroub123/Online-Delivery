import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
Restaurants:any;
  constructor(private data: RestaurantsService) { }

  ngOnInit(): void {
    this.data.getRestaurants().subscribe(
      (result:any)=>{
      console.log(result)
      this.Restaurants = result.output;
  }
  )
  }

}
