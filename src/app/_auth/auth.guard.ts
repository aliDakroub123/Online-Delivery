import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private dataService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):any 
    {

     // if (this.dataService.isAdminLoggedIn()){
        //this.router.navigate(['dashboard'],{queryParams: {returnUrl: state.url}});
       // return true;
    //  }        
    //  this.router.navigate(['/admin/login'],{queryParams: {returnUrl: state.url}}); 
     // return false;

     const routeurl: string= state.url;
     return this.isLogin(routeurl);

    /*const isAdminLoggedIn = this.dataService.getToken() !==null; // replace with your own authentication logic
    if (isAdminLoggedIn) {
      this.router.navigate(['/admin-dashboard']);
      return false;
    } else {
      this.router.navigate(['/admin/login']);
      return true;
    }*/

  }

  isLogin(routeurl:string){
    if(this.dataService.isAdminLoggedIn()){
      return true;
    }

    this.dataService.redirectUrl=routeurl;
    this.router.navigate(['/admin/login'],{queryParams:{returnUrl:routeurl}});

  }

}
