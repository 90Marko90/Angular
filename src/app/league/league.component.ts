import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AxiosService } from 'src/axios.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        CommonModule],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent implements OnInit {
  matches: any[] = [];
  players: any[] = [];
  leagues: any[] = [];
  search: string = '';

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
