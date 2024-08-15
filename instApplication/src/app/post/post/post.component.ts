import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  user!:User;
  constructor(private router:Router){}
  
  ngOnInit():void{
    
  }
}
