import { Component, OnInit } from '@angular/core';
import {GROUPS} from "./model/tournament-group-list";
import {TournamentGroup} from "./model/tournament-group.model";
import {TEAMS} from "../teams/model/team-list";

@Component({
  selector: 'app-tournament-group',
  templateUrl: './tournament-group.component.html',
  styleUrls: ['./tournament-group.component.css']
})
export class TournamentGroupComponent implements OnInit {
  groups = GROUPS;
  teams = TEAMS;
  constructor() { }

  ngOnInit(): void {
  }

}
