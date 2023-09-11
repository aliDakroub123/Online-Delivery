import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Carousels:any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getCarousel().subscribe(
      (result:any)=>{
      console.log(result)
      this.Carousels = result.output;
  }
  )
  }

}
