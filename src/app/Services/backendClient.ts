import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';
import {Movie} from "../Models/movie.model"
import { HttpHeaders, HttpParams} from '@angular/common/http';
import { Comment } from '../Models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class httpCalls {

   url : string = "http://localhost:8080"
   headers = new HttpHeaders().set('Authorization', 'Bearer '+ localStorage.getItem('token'))   

  constructor(private httpClient : HttpClient) { }

  registerUser(user : User): Observable<any>{   
    return this.httpClient.post(this.url+"/user/register",user,{responseType: 'text',observe:'response'});     
  }

  loginUser(user:User): Observable<any>{      
    return this.httpClient.post(this.url+"/user/authenticate",user);
  }

  saveToFavorites(movie : Movie){   

    return this.httpClient.post(this.url+"/movie/likeMovie",movie,{headers: this.headers})    
  }
    
  getFavorites(){ 
  return this.httpClient.get<any>(this.url+"/movie/getMovies",{headers:this.headers})
  }
  
  removeFavorite(movie : Movie){
    return this.httpClient.delete(this.url+"/movie/removeMovie",{headers: this.headers , body: movie});
  }

  addComment(comment : Comment , id : string){    
    let params = new HttpParams().set('id', id);   
    return this.httpClient.post(this.url+"/movie/postComment",comment,{headers: this.headers ,params:params})       
  }

  getAllComments(id : string){
    let params = new HttpParams().set('id', id);   
    return this.httpClient.get(this.url+"/movie/getComments",{headers:this.headers, params: params})
  }

  getRating(id : string){
    let params = new HttpParams().set('id', id);   
    return this.httpClient.get(this.url+"/movie/getRating",{headers:this.headers, params: params})

  }

  postRating(id:string , rating : number){
    let params = new HttpParams().set('id', id).set('rating',rating);  
    console.log(this.headers)
    return  this.httpClient.post(this.url+"/movie/postRating",{headers: this.headers, params: params})
    

  }



}

