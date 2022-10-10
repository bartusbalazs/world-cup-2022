import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import {FormsModule} from "@angular/forms";
import { TournamentGroupComponent } from './tournament-group/tournament-group.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamButtonDirective } from './directives/team-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TournamentGroupComponent,
    TeamDetailComponent,
    TeamButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
