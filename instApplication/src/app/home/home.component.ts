import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private myservices:PostService,private router:Router){}

  post!:Post[];

  ngOnInit():void{
   this.myservices.getListPost().subscribe((response)=>{
    this.post=response;
    console.log(response);
   });
  }

onClick(){
this.router.navigate(["/login"]);
}
}
