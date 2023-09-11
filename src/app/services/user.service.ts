import { User } from './../models/user';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {map, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  redirectUrl!:string;
  baseUrl: string = 'http://localhost:80/The Delivery Master/';

  @Output() getLoggedInName :EventEmitter<any>=new EventEmitter();
 
  constructor(private httpClient: HttpClient) { }

  apiurl='http://localhost:3000/users'

token:any


  createUser(User:any) {
    return this.httpClient.post(this.baseUrl+'regs.php',User);
  }

  public userregistration(f_name:any,l_name:any,email:any,username:any,phone:any,address:any,password:any//,c_password:any
    ){
    return this.httpClient.post<any>(this.baseUrl+'/reg.php',
    {
      f_name,l_name,email,username,phone,address,password//,c_password
    })
    .pipe(map(User=>{
     
      return User;
    })) ; 
  }

public Userlogin(email:any,password:any){
  //alert(email)
  return this.httpClient.post<any>(this.baseUrl + '/login.php',{email,password})
  .pipe(map(User =>{
    this.setToken(User.email);
    this.getLoggedInName.emit(true);
 
    return User;
  }));
}

public adminlogin(username:any,password:any){
  //alert(email)
  return this.httpClient.post<any>(this.baseUrl + '/admin_log.php',{username,password})
  .pipe(map(User =>{
    this.setAToken(User.username);
    this.getLoggedInName.emit(true);
  
    return User;
  }));
}

setToken(token:string){
  localStorage.setItem('token',token);
}
setAToken(token:string){
  localStorage.setItem('adminToken',token);
}


getToken(){
  return localStorage.getItem('token');
}
getAToken(){
  return localStorage.getItem('adminToken');
}
deleteToken(){
  localStorage.removeItem('token');
}
deleteAToken(){
  localStorage.removeItem('adminToken');
}
isLoggedIn(){
  const usertoken=this.getToken();
  if(usertoken != null){
    return true
  }
  return false
}
isAdminLoggedIn(){
  const admintoken=this.getAToken();
  if(admintoken != null){
    return true
  }
  return false
}

/*getSingleUser(id: number){
  return this.httpClient.get<User[]>(this.baseUrl+'getUser.php?id='+id);
}*/

createAdmin(admin:any) {
  return this.httpClient.post(this.baseUrl+'addAdmin.php',admin);
  }





getAll(){
  return this.httpClient.get<User[]>(this.baseUrl+'getUser.php');
}
proceedregister(inputdata:any){

  return this.httpClient.post(this.apiurl,inputdata);

}
deleteUsers(id:any) {
  console.log(id);
  return this.httpClient.delete(this.baseUrl+'deleteUser.php?id='+id);
  
  }

update(code:any,inputdata:any){
  return this.httpClient.post(this.apiurl+'/'+code,inputdata);

}
}
