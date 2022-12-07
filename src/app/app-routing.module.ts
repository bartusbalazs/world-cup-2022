import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    canActivate: [authGuard],
    path: 'groups',
    loadChildren: () => import('./tournament-group/tournament-group.module').then(m => m.TournamentGroupModule)
  },

  {
    canActivate: [authGuard],
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    canActivate: [authGuard],
    path: 'detail/:id',
    loadChildren: () => import('./team-detail/team-detail.module').then(m => m.TeamDetailModule)
  },
  { canActivate: [authGuard], path: 'reactive-form', component: ReactiveFormDemoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

