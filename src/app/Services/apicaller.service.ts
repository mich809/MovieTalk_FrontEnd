import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class APIcallerService {

  apiKey = "86371abe86170fc1f5ead588458405b1"
  base_url = "https://api.themoviedb.org/3/"
  image_url = "http://image.tmdb.org/t/p/w300/"
 


  constructor(private httpClient : HttpClient) { }

  searchMovies(title:string) {    
    let params = new HttpParams().set('api_key',this.apiKey).set('query',title).set('page',1);    
    return this.httpClient.get<any>(this.base_url+"search/movie",{params : params})
  }

  searchMovie(id:string){
      let params = new HttpParams().set('api_key',this.apiKey).set('page',1);    
      return this.httpClient.get<any>(this.base_url+'movie/'+id, {params: params})

  }

  getNowPlaying(){
    let params = new HttpParams().set('api_key',this.apiKey).set('page',1).set('language','en-US');   
    return this.httpClient.get<any>(this.base_url+'movie/now_playing',{params: params})

  }
}
