import { UserService } from './../services/user.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
addForm:any;
  constructor(private service:DataService,private router:Router) {
    this.addForm = new FormGroup({
   
      username: new FormControl('', Validators.required),
      subject: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      content: new FormControl('', [Validators.required, Validators.maxLength(200)]),
     
      });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addMessage(this.addForm.value).subscribe(
    (data:any)=>{this.router.navigate(['/home']); console.log(data)},
    
    error => {
    alert(error);
    console.log("fail")
    });
    }
}
