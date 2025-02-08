import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-log-in',
	standalone: true,
	imports: [FormsModule, ButtonComponent, CommonModule],
	templateUrl: './log-in.component.html',
	styleUrl: './log-in.component.css'
})
export class LogInComponent {
	@Output() onSubmitLoginEvent = new EventEmitter();
	@Output() onSubmitRegisterEvent = new EventEmitter();

	active: string = "login";
	username: string = "";
	login: string = "";
	password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

	onSubmitLogin(): void {
		this.onSubmitLoginEvent.emit({ "login": this.login, "password": this.password });
	}

	onSubmitRegister(): void {
		this.onSubmitRegisterEvent.emit({ "login": this.login, "password": this.password });
	}
}
