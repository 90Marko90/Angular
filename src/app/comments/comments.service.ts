import { HttpClient } from '@angular/common/http';
import { Injectable,Input } from '@angular/core';
import { Observable } from "rxjs";
import { CommentInterface } from "src/interface";

@Injectable({
  providedIn: 'root',
})

export class CommentsService {
  constructor(private http: HttpClient) {}
  @Input() comments: CommentInterface[] = []

  getComment(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface []>('http://localhost:3000/comments') //our observable => stream & all http requests; //get function to get the comments and .get specified as interface; //localhost 3000 as we installed JSON server, which runs on 3000 and not 4200 localhost and returns db.json data
  }

  createComment(body?:string, user?:string, createdAt?:Date): Observable<CommentInterface[]> { //save our comments => website and db.json; method sends a POST request to the /comments endpoint with the comment data in the request body.
    const newComment = {
    body: body,
    user: 'Marko Kmetko',
    userid: Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleString()
    }
    return this.http.post<CommentInterface[]>('http://localhost:3000/comments', newComment)
  }

}

