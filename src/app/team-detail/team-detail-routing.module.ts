import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TeamDetailComponent} from "./team-detail.component";

const routes: Routes = [{ path: '', component:
  TeamDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDetailRoutingModule { }
