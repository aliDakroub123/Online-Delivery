import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Restaurant } from '../models/restaurants';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  filter(arg0: (menu: any) => boolean): any {
    throw new Error('Method not implemented.');
  }
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  constructor(private http: HttpClient) { }

  getRestaurants() {
   return this.http.get<Restaurant[]>(this.baseUrl+'restaurants.php');
    }
    getSingleRestaurant(name: String){
      return this.http.get<Restaurant[]>(this.baseUrl+'restaurants.php?name='+name);
    }

    deleteRest(name:any) {
      console.log(name);
      return this.http.delete(this.baseUrl+'deleteRest.php?name='+name);
      
      }

      createRest(restaurant:any) {
        return this.http.post(this.baseUrl+'addRest.php',restaurant);
        }
}
