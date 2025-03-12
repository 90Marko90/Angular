import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AxiosService } from 'src/axios.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private axiosService: AxiosService,
  ) { }

  players: any[] = [];
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  gender: string = "";
  birthDate: Date = new Date();
  leagueStatus: Boolean | undefined;
  hand: string = "";
  rating: number | undefined;
  registrationDate: Date = new Date();


  ngOnInit(): void {
    this.getPlayers();
  }


    getPlayers(): void {
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
      }


  onSubmitPlayer(input:any): void {
    this.axiosService.request(
      "POST",
      "/players/create",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        gender: input.gender,
        birthDate: input.birthDate,
        leagueStatus: input.leagueStatus,
        hand: input.hand,
        rating: input.rating,
        registrationDate: input.registrationDate
      }
    )
      .then(response => {
        this.axiosService.setAuthToken(response.data.token);
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 401) {
            this.axiosService.setAuthToken(null);
          } else {
            console.log('Error response:', error.response.status, error.response.data);
          }
        } else {
          console.log('Unexpected error:', error.message);
        }
      });
  }

  removePlayer(i: number) {
    this.players.splice(i, 1);
  }


}
