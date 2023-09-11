import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { GuardGuard } from '../guard.guard';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  angForm: any;
  customerToken:any;

  user:any[]=[];
  id:any;
  constructor(private fb: FormBuilder,private dataService:UserService,private guard:GuardGuard) { }

  ngOnInit(): void {
    this.getUser()
    this.angForm = this.fb.group({
      fname: [null],
      lname: [null],
      email: [null],
      username: [null],
      phone: [null],
      address: [null],
     
    });

   /*  this.customerToken = this.dataService.getToken();
    var decoded = jwt_decode(this.customerToken);*/



}
getUser(){
  if("user" in localStorage){
    this.user=JSON.parse(localStorage.getItem("user")!);
   
  }
 

  console.log(this.user)
}
}
