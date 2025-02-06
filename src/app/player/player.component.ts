import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,} from '@angular/forms'; 
import { PlayerService } from './player.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  constructor(
    private fb:FormBuilder, 
    private playerService: PlayerService,
  ) {}
  
  playerForm!: FormGroup;

  
  onSubmit() {

  }


}
