import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiosService } from 'src/axios.service';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [CommonModule], //must import this module for ngFor
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent implements OnInit {
  matches: any[] = [];
  firstName: string = "";

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/matches/getMatches",
      {})
      .then(
        (response) => {
          this.matches = response.data;
        }).catch(
          (error) => {
            if (error.response && error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else if (error.response) {
              this.matches = error.response.code;
            } else {
              console.log('Unexpected error:', error);
            }
          }
        );
  }


}
