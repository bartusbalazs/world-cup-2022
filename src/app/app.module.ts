import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import {FormsModule} from "@angular/forms";
import { TournamentGroupComponent } from './tournament-group/tournament-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TournamentGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
