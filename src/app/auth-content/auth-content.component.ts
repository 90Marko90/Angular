import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/axios.service';

@Component({
  selector: 'app-auth-content',
  imports: [CommonModule],
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent implements OnInit {
  data: string[] = [];

  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}).then(
        (response) => {
          this.data = response.data;
        }).catch(
          (error) => {
            if (error.response && error.response.status === 401) {
              this.axiosService.setAuthToken(null);
            } else if (error.response) {
              this.data = error.response.code;
            } else {
              console.log('Unexpected error:', error);
            }
          }
        );
  }
}