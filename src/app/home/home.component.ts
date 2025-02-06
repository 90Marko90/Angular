import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { faInstagram, faYoutube, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  faInstagram = faInstagram;
  faYoutube = faYoutube; 
  faLinkedin = faLinkedin; 
  faXTwitter = faXTwitter

  //<fa-icon [icon]="faInstagram"></fa-icon>
}
