import { Component, ElementRef, EventEmitter, OnInit,Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  isExpanded: boolean = false;



  sideNavStatus:boolean=false;
  constructor(private dataService:UserService, private router:Router,private el:ElementRef) { }

  logouttt() {
    this.dataService.deleteAToken();
      this.router.navigate(['/admin/login']);
    }
  
  ngOnInit(): void {

    
    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    console.log(alldrpdwn,'alldrpdwn#');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a,'a#');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });
      
    });
  }


}
