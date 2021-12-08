
import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment : string

  constructor(@Inject(MAT_DIALOG_DATA) private data : string) {
    this.comment = data
   }

  ngOnInit(): void {
  }

}
