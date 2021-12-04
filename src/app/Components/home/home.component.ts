import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import {APIcallerService} from "../../Services/apicaller.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   username : string |null = localStorage.getItem('username')
   movies !: Movie[] 
   

   constructor(private caller : APIcallerService) { 
  
   }

  ngOnInit(): void {
    this.caller.getNowPlaying().subscribe(data =>{
      this.movies = data.results  
      this.movies.forEach((element,index)=>{     
        if(element.poster_path == null && element.backdrop_path == null){             
          this.movies.splice(index,1)
        
        }
  })  
    })
  
  }

  getCurrentMovies(){
  

  }



  

}
