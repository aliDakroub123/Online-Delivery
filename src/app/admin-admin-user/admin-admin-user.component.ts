import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-admin-user',
  templateUrl: './admin-admin-user.component.html',
  styleUrls: ['./admin-admin-user.component.css']
})
export class AdminAdminUserComponent implements OnInit {
  addForm:any
  constructor(private service:UserService,private router:Router) { 
    this.addForm = new FormGroup({
      
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  
      });
  }

  ngOnInit(): void {

  
  }
  onSubmit(){
    this.service.createAdmin(this.addForm.value).subscribe(
    (data:any)=>{this.router.navigate(['/admin/main/dashboard']); },
    error => {
    alert(error);
    });
    }
}
