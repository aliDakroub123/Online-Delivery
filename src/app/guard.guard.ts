import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
constructor(private router: Router,
  private dataService:UserService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
    //return true;

  
      const routeurl: string= state.url;
      return this.isLogin(routeurl);

      
  
  }

  isLogin(routeurl:string){
    if(this.dataService.isLoggedIn()){
      return true;
    }

    this.dataService.redirectUrl=routeurl;
    this.router.navigate(['/customer/login'],{queryParams:{returnUrl:routeurl}});

  }
  
}
