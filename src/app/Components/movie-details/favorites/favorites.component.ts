import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  like : string

  constructor( @Inject(MAT_DIALOG_DATA) private data : string) { 
      this.like = data
  }

  ngOnInit(): void {
  }

}
