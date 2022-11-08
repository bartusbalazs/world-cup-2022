import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TeamDetailRoutingModule} from "./team-detail-routing.module";
import {TeamDetailComponent} from "./team-detail.component";

@NgModule({
  declarations: [
    TeamDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TeamDetailRoutingModule
  ]
})
export class TeamDetailModule { }
