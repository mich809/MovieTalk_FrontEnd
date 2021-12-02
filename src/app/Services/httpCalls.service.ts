import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class httpCalls {

  url : string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  registerUser(user : User){   
    return this.httpClient.post(this.url+"/user/register",user);     
  }

  loginUser(user:User){      
    return this.httpClient.post<user>(this.url+"/user/authenticate",user)
   
  }



}

interface user{
  username : string,
  jwtToken : string
}
