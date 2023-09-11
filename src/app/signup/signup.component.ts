import { DataService } from './../services/data.service';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl ,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

myForm:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    
    private dataService:UserService,
  ) {

    this.myForm = new FormGroup({
      id: new FormControl('',[]),
      f_name: new FormControl( '', Validators.required),  
      email:new FormControl('', [Validators.required,Validators.email, Validators.maxLength(20)]),
      username:new FormControl('', [Validators.required, Validators.maxLength(20)]), 
      l_name: new FormControl( '', Validators.required),  
      address:new FormControl ('', [Validators.required, Validators.maxLength(100)]) ,  
      phone:new FormControl('', [Validators.required, Validators.maxLength(20)] ),
      password: new FormControl('', [Validators.required, Validators.maxLength(30)] ),
    })

   }

  ngOnInit(): void {

  }


  onSubmit(){
    this.dataService.createUser(this.myForm.value).subscribe((data:any)=>{this.router.navigate(['/home']);},
    error=>{
      alert(error);
    });
    
  }
 
 
  postdata(addForm:any){

    this.dataService.userregistration(
      addForm.value.f_name,
      addForm.value.l_name,
      addForm.value.email,
      addForm.value.username,
      addForm.value.phone,
      addForm.value.address,
      addForm.value.password,
      //addForm.value.c_password,
    )
    .pipe(first()).subscribe(data=> {
      this.router.navigate(['customer/login']);
      console.log("submitted");
    },
    error =>{

    });
  }
}
