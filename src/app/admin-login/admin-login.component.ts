import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl ,NgForm} from '@angular/forms';
import { UserService } from '../services/user.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  angForm:FormGroup;
  constructor(   private formBuilder: FormBuilder,
    private router: Router,private dataService:UserService,) { this.angForm = this.formBuilder.group({

      username: ['', [Validators.required, Validators.maxLength(20)]] ,
     
      password: ['', [Validators.required]] ,
 
     
    }
    ); }
    postdata(angForm:any){

      this.dataService.adminlogin(angForm.value.username,angForm.value.password)
      .pipe(first())
      .subscribe(
        data =>{
         // const redirect =this.dataService.redirectUrl ? this.dataService.redirectUrl :'/home';
         if(data.message=='success'){
          this.router.navigate(['/admin/main']);
         }
        },
        error =>{
          alert("User name or password is incorrect")

        }
      );
    }
  ngOnInit(): void {
  }

}
