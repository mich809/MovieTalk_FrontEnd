import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import {APIcallerService} from "../../Services/apicaller.service"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieTitle = ''
  movies !: Movie[] 


  constructor(private caller : APIcallerService) { }

  ngOnInit(): void {
  }

  searchMovie(){   
    this.movies = []
    this.caller.searchMovies(this.movieTitle).subscribe(data =>{
      this.movies = data.results   
      this.movies.forEach((element,index)=>{     
            if(element.poster_path == null && element.backdrop_path == null){             
              this.movies.splice(index,1)
            
            }
      })  
    })}

  
  
  
  
  
  
  }
