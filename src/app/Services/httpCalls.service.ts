import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import {Movie} from "../Models/movie.model"
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class httpCalls {

  url : string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  registerUser(user : User): Observable<any>{   
    return this.httpClient.post(this.url+"/user/register",user,{responseType: 'text',observe:'response'});     
  }

  loginUser(user:User): Observable<any>{      
    return this.httpClient.post(this.url+"/user/authenticate",user);
    
  }

  saveToFavorites(movie : Movie){
    console.log(movie)
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+ localStorage.getItem('token'))   
    return this.httpClient.post(this.url+"/user/likeMovie",movie,{headers: headers})
    

  }



}

interface user{
  username : string,
  jwtToken : string
}
