import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import {httpCalls} from "../../Services/backendClient"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  favoriteMovies !: Movie[] 

  constructor(private backEndCaller : httpCalls) { }

  ngOnInit(): void {   
    this.favoriteMovies = []
    this.backEndCaller.getFavorites().subscribe(data=>{
      this.favoriteMovies = data
    })

  }

}
