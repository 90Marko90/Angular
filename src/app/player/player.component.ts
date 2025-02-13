import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { PlayerService } from './player.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Match } from 'src/interface';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
  ) { }

  // Matches: Match[] = []
  // filterMatches: Match[] = []
  // matchCategory: string = '0'
  playerForm!: FormGroup;
  firstName: string = "";
  lastName: string = ""; 
  email: string = ""; 
  gender: string = ""; 
  birthDate: string = ""; 
  leagueStatus: string = ""; 
  hand: string = ""; 
  rating: string = ""; 
  registrationDate: string = ""; 





  onSubmitPlayer() { 
  }

  // dropDown(value: string) {
  //   if (value === '0') { this.filterMatches = this.Matches }
  //   else if (value === '1') { this.filterMatches = this.Matches.filter((Matches) => Matches.category) }
  //   else (value === '2')
  //   { this.filterMatches = this.Matches.filter((Matches) => !Matches.category) }
  // }

  // selectMatch(match: any) {

  // }


}
