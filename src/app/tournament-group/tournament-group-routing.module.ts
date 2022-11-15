import {RouterModule, Routes} from "@angular/router";
import {TournamentGroupComponent} from "./components/tournament-groups/tournament-group.component";
import {NgModule} from "@angular/core";
import {TournamentGroupDetailComponent} from "./components/tournament-group-detail/tournament-group-detail.component";
import {TournamentGroupWrapperComponent} from "./tournament-group-wrapper.component";
import {MatchDetailComponent} from "./components/match-detail/match-detail.component";

const routes: Routes = [{
  path: '',
  component: TournamentGroupWrapperComponent,
  children: [
      {
        path: '',
        component: TournamentGroupComponent
      },
      {
        path: ':id',
        component: TournamentGroupDetailComponent
      },
      {
        path: 'match/:id',
        component: MatchDetailComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentGroupRoutingModule { }
