import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
users:any;

  constructor(private data: UserService,private router: Router) { }

  ngOnInit(): void {
    this.data.getAll().subscribe(
      (result:any)=>{
      console.log(result)
      this.users = result.output;
        })
}
deleteUser(user:any){
  // console.log(user.id);
  this.data.deleteUsers(user.id).subscribe(
  (result:any)=>{
    console.log(result)
  this.users = this.users.filter((u: any) => u !== user);

  })

  }

  selectOrder(username:string){
    this.router.navigate(['admin/main/order', username]);
  }
}
