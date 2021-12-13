import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute} from '@angular/router';
import {Movie} from "../../Models/movie.model";
import {APIcallerService} from "../../Services/movieDatabaseClient"
import { TrailerComponent } from './trailer/trailer.component';
import {MovieTrailer} from "../../Models/movieTrailer.model"
import {DomSanitizer} from '@angular/platform-browser';

import { FavoritesComponent } from './favorites/favorites.component';
import {httpCalls} from "../../Services/backendClient"
import { FormBuilder, FormControl} from '@angular/forms';
import { Comment } from "../../Models/comment.model"


 



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movie : Movie 
  comment : Comment
  comments : any
  trailer : MovieTrailer
  status: boolean = false;
  CommentForm = new FormControl('');


  

  constructor(private activatedRoute : ActivatedRoute ,private caller : APIcallerService, private dialog : MatDialog,private sanitizer : DomSanitizer,private backendCaller : httpCalls, private formBuilder: FormBuilder) {}
      
     
  ngOnInit(): void { 
      this.activatedRoute.params.subscribe(params =>{
      const id = params['id']
      this.getMovie(id)
      this.getTrailer(id)
      this.getComments(id)
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
      this.backendCaller.saveToFavorites(this.movie).subscribe(data =>{
        console.log(data)
      })
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
    this.comment = new Comment(this.CommentForm.value , localStorage.getItem("username"))      
    console.log(this.comment)
    this.backendCaller.addComment(this.comment , this.movie.id).subscribe(data=>{
      console.log(data)
    })
    this.CommentForm.reset()

  }

  getComments(id : string){
    
    this.backendCaller.getAllComments(id).subscribe(data=>{
        console.log(data)
  

    })
  }

  



}
