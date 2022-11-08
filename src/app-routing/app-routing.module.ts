import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../app/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'groups',
    loadChildren: () => import('../app/tournament-group/tournament-group.module').then(m => m.TournamentGroupModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../app/team-detail/team-detail.module').then(m => m.TeamDetailModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

