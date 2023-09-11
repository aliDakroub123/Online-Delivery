import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Carousel } from '../models/carousel';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'http://localhost:80/The Delivery Master/';
  constructor(private http: HttpClient) { }

  getCarousel() {
    return this.http.get<Carousel[]>(this.baseUrl+'carousel.php');
    }

    addMessage(message:any) {
      return this.http.post(this.baseUrl+'addReports.php',message);
      }

      getAll(){
        return this.http.get<any[]>(this.baseUrl+'getMessages.php');
      }
}
