import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Movie} from "../../Models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title: string = ''

  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe((data)=>{
     
    }
      
     
    )

  }

  ngOnInit(): void {
  }

}
