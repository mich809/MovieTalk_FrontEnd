import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute} from '@angular/router';
import {Movie} from "../../Models/movie.model";
import {APIcallerService} from "../../Services/apicaller.service"
import { TrailerComponent } from './trailer/trailer.component';
import {MovieTrailer} from "../../Models/movie-trailer"
import {DomSanitizer} from '@angular/platform-browser';
import { CommentComponent } from './comment/comment.component';
import { FavoritesComponent } from './favorites/favorites.component';
import {httpCalls} from "../../Services/httpCalls.service"
 



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movie : Movie 
  trailer : MovieTrailer
  status: boolean = false;

  

  constructor(private activatedRoute : ActivatedRoute ,private caller : APIcallerService, private dialog : MatDialog,private sanitizer : DomSanitizer,private backendCaller : httpCalls) {}
      
     
  ngOnInit(): void { 
      this.activatedRoute.params.subscribe(params =>{
      const id = params['id']
      this.getMovie(id)
      this.getTrailer(id)
      })}


  getMovie(id : string){
      this.caller.searchMovie(id).subscribe(data => {
          this.movie = data;
         
      })
  }

  getTrailer(id : string){
    this.caller.getTrailer(id).subscribe(data => {
      this.trailer = data.results[0]
      this.trailer['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.trailer['key']);
      

   })
  }


  addToFavorites(){   
    this.status = !this.status;
   
    if(this.status){
      this.dialog.open(FavoritesComponent,{
        data: this.movie.original_title + " has been added to your favorites."
      }) 
      this.saveMovietoBackend(this.movie)
    }
    else {
      this.dialog.open(FavoritesComponent,{
        data: this.movie.original_title + " has been removed from your favorites."
      }) 
      
    }
  }

  watchTrailer(){   
      this.dialog.open(TrailerComponent,{
        data : this.trailer['url']

      }) 
   
  }

  postComment(){
    this.dialog.open(CommentComponent) 
  }

  saveMovietoBackend(movie:Movie){
    this.backendCaller.saveToFavorites(movie).subscribe(data =>{
      console.log(data)
    })
  }



}
