import { Component } from '@angular/core';
import { AxiosService } from 'src/axios.service';
import { LogInComponent } from '../log-in/log-in.component';
import { ButtonComponent } from '../log-in/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WelcomeContentComponent } from '../welcome-content/welcome-content.component';

@Component({
	selector: 'app-signin',
	standalone: true,
	imports: [FormsModule, CommonModule, LogInComponent, ButtonComponent, WelcomeContentComponent],
	templateUrl: './signin.component.html',
	styleUrl: './signin.component.css'
})

export class SigninComponent {
	componentToShow: string = "welcome";
	data: string[] = [];

	constructor(private axiosService: AxiosService) { }

	showComponent(componentToShow: string): void {
		this.componentToShow = componentToShow;
	}

	onLogin(input: any): void {
		this.axiosService.request(
			"POST",
			"/login",
			{
				login: input.login,
				password: input.password
			}).then(
				response => {
					this.axiosService.setAuthToken(response.data.token);
					this.componentToShow = "messages";
				}).catch(
					error => {
						this.axiosService.setAuthToken(null);
						this.componentToShow = "welcome";
					}
				);
	}

	onRegister(input: any): void {
		this.axiosService.request(
			"POST",
			"/register",
			{
				username: input.username,
				password: input.password,
			}).then(
				response => {
					this.axiosService.setAuthToken(response.data.token);
					this.componentToShow = "messages";
				}).catch(
					error => {
						this.axiosService.setAuthToken(null);
						this.componentToShow = "welcome";
					}
				);
	}

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
