import { Component, OnInit } from '@angular/core';
import {GROUPS} from "../../model/tournament-group-list";
import {TournamentGroup} from "../../model/tournament-group.model";
import {TournamentGroupService} from "../../../services/tournament-group.service";

@Component({
  selector: 'app-tournament-group',
  templateUrl: './tournament-group.component.html',
  styleUrls: ['../../tournament-group.component.css']
})
export class TournamentGroupComponent implements OnInit {
  groups: TournamentGroup[] = [];
  constructor(private groupService:TournamentGroupService) { }

  ngOnInit(): void {
    this.initGroups();
  }

  private initGroups() {
    this.groupService.getGroups().subscribe((groups) => this.groups = groups);
  }
}
