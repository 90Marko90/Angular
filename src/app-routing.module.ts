import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './app/comments/comments.component';
import { HomeComponent } from './app/home/home.component'
import { PlayerComponent } from './app/player/player.component';
import { SigninComponent } from './app/signin/signin.component';
import { MatchComponent } from './app/match/match.component';

const routes: Routes = [
  { path: 'Player', component: PlayerComponent },
  { path: 'Comments', component: CommentsComponent}, 
  { path: 'Home', component: HomeComponent},
  { path: 'SignIn', component: SigninComponent},
  { path: 'Match', component: MatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
