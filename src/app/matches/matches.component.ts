import { Component, OnInit } from '@angular/core';
import { MatchService } from './matches.service';
import { Match } from 'src/interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [ 
    MatFormFieldModule,
    MatInputModule, 
    MatSelect,
    FormsModule,
    MatOption
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

  constructor (private matchesService: MatchService) { }
  Matches: Match[] = []
  filterMatches: Match[] = []
  matchCategory: string = '0'


  dropDown(value: string) {
    if (value === '0') 
    { this.filterMatches = this.Matches }
    else if (value === '1') 
    { this.filterMatches = this.Matches.filter((Matches) => Matches.category) }
    else (value === '2')
    { this.filterMatches = this.Matches.filter((Matches) => !Matches.category) }
  }

  selectMatch(match: any) {

  }

}
