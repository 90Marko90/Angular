import { Component, OnInit } from '@angular/core';
import { CommentInterface } from 'src/interface';
import { CommentsService } from './comments.service';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments: CommentInterface[] = []; //json-server --watch db.json 
  user!: string;
  body!: string;
  createdAt!: Date 

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getComment().subscribe(comments => this.comments = comments); //fetching comments 
  } 

  addComment(value: string) {
    this.commentsService.createComment(value).subscribe(createdComment => this.comments.push())
  }

}

