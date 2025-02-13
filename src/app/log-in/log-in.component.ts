import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-log-in',
	standalone: true,
	imports: [FormsModule, CommonModule],
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
  role: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({"username": this.username, "password": this.password, "role": this.role});
  }
}
