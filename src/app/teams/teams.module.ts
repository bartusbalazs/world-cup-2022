import {NgModule} from "@angular/core";
import {TeamsComponent} from "./teams.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ TeamsComponent ],
  exports: [ TeamsComponent],
  imports: [ FormsModule, CommonModule, RouterModule ]
})
export class TeamsModule{}
