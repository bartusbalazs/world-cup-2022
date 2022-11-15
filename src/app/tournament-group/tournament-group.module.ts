import {NgModule} from "@angular/core";
import {TournamentGroupComponent} from "./components/tournament-groups/tournament-group.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TournamentGroupRoutingModule} from "./tournament-group-routing.module";
import {TeamsModule} from "../teams/teams.module";
import {TournamentGroupService} from "../services/tournament-group.service";
import {TournamentGroupWrapperComponent} from "./tournament-group-wrapper.component";
import {TournamentGroupDetailComponent} from "./components/tournament-group-detail/tournament-group-detail.component";
import {MatchService} from "../services/match.service";
import { MatchDetailComponent } from './components/match-detail/match-detail.component';

@NgModule({
  declarations: [
    TournamentGroupComponent,
    TournamentGroupDetailComponent,
    TournamentGroupWrapperComponent,
    MatchDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TournamentGroupRoutingModule,
    TeamsModule
  ],
  providers: [
    TournamentGroupService,
    MatchService
  ]
})
export class TournamentGroupModule { }
