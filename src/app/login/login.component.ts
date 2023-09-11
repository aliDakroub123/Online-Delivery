import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl ,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //angForm:FormGroup;
userdata:any;
 angForm:FormGroup;
  _visible: any;
  fieldTextType: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService:UserService,) { 
      this.angForm = this.formBuilder.group({

        email: ['', [Validators.required, Validators.minLength(1),Validators.email]] ,
       
        password: ['', [Validators.required]] ,
   
       
      }
      );
    }

    postdata(angForm:any){

      this.dataService.Userlogin(angForm.value.email,angForm.value.password)
      .pipe(first())
      .subscribe(
        (data:any) =>{
          console.log(angForm.value.email)
   
          this.userdata=data.output;
          console.log(this.userdata)
         // const redirect =this.dataService.redirectUrl ? this.dataService.redirectUrl :'/home';
         if(data.message=='success'){
          
          this.router.navigate(['/home']);
       
          localStorage.setItem("user",JSON.stringify(this.userdata));
         }
         else {
          alert("User name or password is incorrect")
         }
        },
        error =>{
          alert("User name or password is incorrect")

        }
      );
    }
  ngOnInit(): void {

    this.angForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: [null, Validators.required],
    });
  }

  TogglePage(pageValue: string){
    
    switch(pageValue) {
      case 'register':
        this._visible = true 
        break;
      case 'login':
        this._visible = false
        break;
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
