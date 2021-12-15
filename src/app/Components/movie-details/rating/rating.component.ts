import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  starRating : number 

  constructor(public dialogRef: MatDialogRef<RatingComponent>,@Inject(MAT_DIALOG_DATA) public data: number) { 
  
      this.starRating = data

      

    
  
  }

  ngOnInit(): void {
   
  }

  closeDialog(){    this.dialogRef.close({
    data : this.starRating
  });
  
  
     
  }

}
