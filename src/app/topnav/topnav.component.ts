
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
user:any;
cart:any
  loginbtn :boolean;
  logoutbtn:boolean;

  constructor(private dataService:UserService) {
    dataService.getLoggedInName.subscribe(name=> this.changeName(name));
    
    if(this.dataService.isLoggedIn()){
    
      console.log("loggedin");
      this.loginbtn=false
      this.logoutbtn=true;
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false;
    }
   }

   private changeName(name:boolean):void{
    this.logoutbtn=name;
    this.loginbtn= !name;
   }

   logout(){
    this.user=[];
    this.cart=[];
    this,this.dataService.deleteToken();
    window.location.href=window.location.href;
    localStorage.setItem("user",JSON.stringify(this.user));
    localStorage.setItem("cart",JSON.stringify(this.cart));
   }
  ngOnInit(): void {
  }

}
