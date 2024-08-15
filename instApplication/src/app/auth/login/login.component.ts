import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!:string;
  password!:string;
  
  constructor(private myServices:UserService,private router:Router){}
  onClick(){
      this.myServices.signuup(this.email,this.password).subscribe((response)=>{
          this.router.navigate(["/post"],{state:{data:response}});
      },
    error=>{
      console.log("Error",error);
    });
  }

}
