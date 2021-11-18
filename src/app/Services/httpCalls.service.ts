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
    return this.httpClient.post(this.url+"/register",user);  
   
  }
}
