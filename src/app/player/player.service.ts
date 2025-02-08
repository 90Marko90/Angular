import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]> {
      return this.http.get<Match[]>('http://localhost:3000/matches')
    }
}
