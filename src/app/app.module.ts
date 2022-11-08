import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import {FormsModule} from "@angular/forms";
import { TournamentGroupComponent } from './tournament-group/components/tournament-groups/tournament-group.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamButtonDirective } from './directives/team-button.directive';
import {TeamService} from "./services/team.service";
import {HttpClientModule} from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamButtonDirective,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
