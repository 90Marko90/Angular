import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AxiosService } from 'src/axios.service';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  matches: any[] = [];
  players: any[] = [];
  leftSearch: string = '';
  filteredPlayersLeft: any[] = [];
  rightSearch: string = '';
  filteredPlayersRight: any[] = [];
  leftSets: number[] = [0, 0, 0, 0, 0, 0];
  rightSets: number[] = [0, 0, 0, 0, 0, 0];
  selectedPlayerLeft: any = null;
  selectedPlayerRight: any = null;

  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    this.getMatches();
    this.getPlayers();
    this.onSubmitMatch();
  }

    getMatches(): void {
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

    getPlayers(): void {
      this.axiosService.request(
      "GET",
      "/players/getAllPlayers",
      {})
      .then((response) => {
          this.players = response.data;
          this.filteredPlayersLeft = this.players;
          this.filteredPlayersRight = this.players;
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

      onSubmitMatch(): void {
        if (this.selectedPlayerLeft && this.selectedPlayerRight) {
          const matchData = {
            player1: this.selectedPlayerLeft.firstName,
            player2: this.selectedPlayerRight.firstName,
            leftSets: this.leftSets,
            rightSets: this.rightSets
          };
          this.axiosService.request(
            'POST',
            '/matches/create',
            matchData
          )
          .then((response) => {
            this.matches = response.data;
          })
          .catch((error) => {
            console.error('Error creating match:', error);
          });
        } else {
          console.error('Please select both players.');
        }
      }

      filterPlayersLeft(): void {
        const query = this.leftSearch.toLowerCase();
        this.filteredPlayersLeft = this.players.filter(player =>
          player.firstName.toLowerCase().includes(query)
        );
      }

      filterPlayersRight(): void {
        const query = this.rightSearch.toLowerCase();
        this.filteredPlayersRight = this.players.filter(player =>
          player.firstName.toLowerCase().includes(query)
        );
      }

      selectPlayerLeft(player: any) {
        this.leftSearch = player.firstName;
        this.filteredPlayersLeft = [];
      }

      selectPlayerRight(player: any) {
        this.rightSearch = player.firstName;
        this.filteredPlayersRight = [];
      }

      }

//       How It Works
// Two-Way Binding with [(ngModel)] Your input field is bound to the leftSearch property.
// That means any change to leftSearch in your component automatically updates the input.

// Click Handler on <li> When you click a player name in the <li>, the selectPlayer(player) method is called.
// Inside this method, you update leftSearch.

// Automatic Update of the Input Field Since leftSearch is used in data binding ([(ngModel)]="leftSearch"),
// as soon as the method updates its value, the input field reflects the selected player's name.

// That's all! With these changes, clicking on an <li> with a player's name will automatically fill the search input with that name.




