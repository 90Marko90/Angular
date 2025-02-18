import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/axios.service';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [CommonModule], //must import this module for ngFor
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent implements OnInit {
  matches: any[] = [];
  players: any[] = [];
  leagues: any[] = [];

  constructor(private axiosService: AxiosService) { }

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

    this.axiosService.request(
      "GET",
      "/players/getAllPlayers",
      {})
      .then(
        (response) => {
          this.players = response.data;
        }).catch(
          (error) => {
            if (error.response && error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else if (error.response) {
              this.players = error.response.code;
            } else {
              console.log('Unexpected error:', error);
            }
          }
        );
    this.axiosService.request(
      "GET",
      "/leagues/getAllLeagues",
      {})
      .then(
        (response) => {
          this.leagues = response.data;
        }).catch(
          (error) => {
            if (error.response && error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else if (error.response) {
              this.leagues = error.response.code;
            } else {
              console.log('Unexpected error:', error);
            }
          }
        );
  }
}
