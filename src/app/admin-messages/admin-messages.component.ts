import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
messages:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getAll().subscribe(
      (result:any)=>{
      console.log(result)
      this.messages = result.output;
        })
  }

}
