import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatDialog } from "@angular/material/dialog";
import { RestaurantsService } from '../services/restaurants.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  Restaurants:any;
 
  selectedRestaurant: any;
  constructor(private data: RestaurantsService,private router: Router) { }

  ngOnInit(): void {
    this.data.getRestaurants().subscribe(
      (result:any)=>{
      console.log(result)
      this.Restaurants = result.output;
  }
  );



  }

  showData(name:any){
    this.data.getSingleRestaurant(name).subscribe(data => {
      this.selectedRestaurant = data;
    });
  }
  onSelectRestaurant(name: string) {
    this.router.navigate(['/restaurants', name]);
  }
}
