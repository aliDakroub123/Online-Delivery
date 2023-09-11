export class User{

  public  id?: number;  
  public  f_name?: string;  
 public   l_name?: string;
  public  email?: string;
  public  username?: string;
  public  phone?: string;
  public  address?: string;    
  public  password?: string; 
  public  c_password?: string;
   
constructor(id: number,f_name: string,
    l_name:string,email:string,
    username:string,phone:string,
    address:string,password:string,
    c_password:string){

        this.id=id;
        this.f_name=f_name;
        this.l_name=l_name;
        this.email=email;
        this.username=username;
        this.phone=phone;
        this.password=password;
        this.c_password=c_password;

    }

}