import { Component, OnInit ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
   safeURL

  constructor( @Inject(MAT_DIALOG_DATA) private trailerURL : string ,private sanitizer : DomSanitizer ) { 
   
    this.safeURL = trailerURL;
    console.log(this.safeURL)
   
    
  }

  ngOnInit(): void {
  }

}
