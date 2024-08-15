import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
     user!:User;
     result!:string;

     constructor(private myServices:UserService ,private router:Router){}

    ngOnInit():void{
      this.user=new User;
    }
     onClick(){
      this.myServices.addUser(this.user).subscribe((response:string)=>{
          this.result=response;  
          this.router.navigate(["/login"])
      },
      error=>{
        console.log("Error",error);
      }
    );
      
     }
}
