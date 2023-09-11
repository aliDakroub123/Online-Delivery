import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The_Delivery_Master';
  constructor(private router:Router) { }

  hasRoute(route: string){
    return this.router.url.includes(route)
  }

 
}
