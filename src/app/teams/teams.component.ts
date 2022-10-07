import { Component, OnInit } from '@angular/core';

import {TEAMS} from "./model/team-list";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = TEAMS;

  constructor() { }

  ngOnInit(): void {
  }

}
