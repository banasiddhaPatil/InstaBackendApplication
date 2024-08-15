import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  url:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public addUser(obj:User):Observable<string>{
    return this.http.post<string>(`${this.url}/user/signup`,obj);
  }

  public signuup(email:string,password:string):Observable<User>{
    return this.http.post<User>(`${this.url}/user/signin/${email}/${password}`,null);
  }

  
}
