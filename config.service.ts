import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get('https://api.example.com/config');
  }
}
