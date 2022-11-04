import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TournamentGroupComponent} from "../app/tournament-group/tournament-group.component";
import {DashboardComponent} from "../app/dashboard/dashboard.component";
import {PageNotFoundComponent} from "../app/page-not-found/page-not-found.component";
import {TeamDetailComponent} from "../app/team-detail/team-detail.component";
const routes: Routes = [
  { path: 'groups', component: TournamentGroupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TeamDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

