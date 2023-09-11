import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-add-rest',
  templateUrl: './admin-add-rest.component.html',
  styleUrls: ['./admin-add-rest.component.css']
})
export class AdminAddRestComponent implements OnInit {
restaurants:any;
addForm:any
  constructor(private service:RestaurantsService,private router:Router) { 
    this.addForm = new FormGroup({
      
      name: new FormControl('', Validators.required),
      area: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      type: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      about: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      image: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      hours: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      services: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      rating: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.createRest(this.addForm.value).subscribe(
    (data:any)=>{this.router.navigate(['/admin/main/dashboard']); },
    error => {
    alert(error);
    });
    }
}
