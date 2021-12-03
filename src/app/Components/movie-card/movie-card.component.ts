import { Component, OnInit,Input } from '@angular/core';
import {Movie} from "../../Models/movie.model";
import { Router } from '@angular/router';
import { MovieComponent } from '../movie-details/movie.component';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movies !: Movie[] 


  
    

  constructor(private router: Router) {  
  }

  ngOnInit(): void {
  }
  goToMoviePage(movieID : string ){    
  
    this.router.navigate(['main/search/movie',movieID])
  
    
    
  }

}
