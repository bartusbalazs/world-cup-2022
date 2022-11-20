import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";

const routes: Routes = [
  {
    path: 'groups',
    loadChildren: () => import('./tournament-group/tournament-group.module').then(m => m.TournamentGroupModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./team-detail/team-detail.module').then(m => m.TeamDetailModule)
  },
  { path: 'reactive-form', component: ReactiveFormDemoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

