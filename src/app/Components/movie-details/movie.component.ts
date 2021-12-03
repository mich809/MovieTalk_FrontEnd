import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Movie} from "../../Models/movie.model";
import {APIcallerService} from "../../Services/apicaller.service"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movie !: Movie;

  constructor(private activatedRoute : ActivatedRoute ,private caller : APIcallerService) { }
      
     
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = params['id']
      this.getMovie(id)
  })
  }


  getMovie(id : string){
      this.caller.searchMovie(id).subscribe(data => {
          this.movie = data;
         
      })
  }

}
