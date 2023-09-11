import { MenuService } from './../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from 'rxjs';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';

import { Items } from '../models/items.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  menu: any;


  submitted: boolean = false;
myForm:any;
  errorMessage: any;
  successMessage:any; 
  constructor(private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private MenuService:MenuService,
    private dataService:UserService,) { 
      this.myForm = this.formBuilder.group({
        f_name: this.formBuilder.control( '', Validators.required),  
        email:this.formBuilder.control ('', [Validators.required,Validators.email, Validators.maxLength(20)]),
        username:this.formBuilder.control ('', [Validators.required, Validators.maxLength(20)]), 
        l_name: this.formBuilder.control( '', Validators.required),  
        address:this.formBuilder.control ('', [Validators.required, Validators.maxLength(50)]) ,  
        phone:this.formBuilder.control ('', [Validators.required, Validators.maxLength(20)] ),
        password: this.formBuilder.control('', [Validators.required, Validators.maxLength(30)] ),
        //c_password: ['', [Validators.required, Validators.maxLength(30)]] ,
       isactive: this.formBuilder.control(false),
      }
      ) 
}


//myForm:any = FormControl;
onFormSubmit() {
  if (this.myForm.valid) {
    console.log(this.myForm.value);
  } else {
    return;
  }
}
  ngOnInit(): void {
   /* this.myForm= this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      f_name: ['', [Validators.required, Validators.minLength(8)]],
      l_name: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });*/
  
    this.menu = this.MenuService
    .menuOfRestaurant(this.route.snapshot.params['id']);
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


  registration(){
    if(this.myForm.valid){
  this.dataService.proceedregister(this.myForm.value).subscribe(res =>{
    console.log("success");
    this.router.navigate(['customer/login'])
  });
    }else{
      console.log("inter valid")
    }
  }
  onSubmit(){
    this.dataService.createUser(this.myForm.value).subscribe((data:any)=>{this.router.navigate(['/home']);},
    error=>{
      alert(error);
    });
    
  }
}
