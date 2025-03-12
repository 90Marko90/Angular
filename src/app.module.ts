import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './app/comments/comments.component';
import { CommentFormComponent } from './app/comment-form/comment-form.component';
import { CommentsService } from './app/comments/comments.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogInComponent } from './app/log-in/log-in.component';
import { ButtonComponent } from './app/log-in/button/button.component';
import { SigninComponent } from './app/signin/signin.component';
import { WelcomeContentComponent } from './app/welcome-content/welcome-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AxiosService } from './axios.service';
import { LeagueComponent } from './app/league/league.component';
import { MatchComponent } from './app/match/match.component';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    FontAwesomeModule,
    AppComponent,
    CommentsComponent,
    CommentFormComponent,
    LogInComponent,
    ButtonComponent,
    SigninComponent,
    WelcomeContentComponent,
    LeagueComponent,
    MatchComponent,
  ],
  providers: [AxiosService, CommentsService, provideAnimationsAsync()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class AppModule {

 }
