import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private router:Router) { }
  url:string="http://localhost:8080";

  public getListPost():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}/get/all/post`);
  }

}
