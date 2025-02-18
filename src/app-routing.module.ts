import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './app/comments/comments.component';
import { HomeComponent } from './app/home/home.component'
import { PlayerComponent } from './app/player/player.component';
import { SigninComponent } from './app/signin/signin.component';
import { LeagueComponent } from './app/league/league.component';

const routes: Routes = [ 
  // Default route
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'Player', component: PlayerComponent },
  { path: 'Comments', component: CommentsComponent}, 
  { path: 'SignIn', component: SigninComponent},
  { path: 'League', component: LeagueComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
