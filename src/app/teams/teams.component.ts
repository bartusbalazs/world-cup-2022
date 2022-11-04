import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {TEAMS} from "./model/team-list";
import {Team} from "./model/team.model";
import {TeamDetailComponent} from "../team-detail/team-detail.component";
import {TeamService} from "../services/team.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : Team[] = [];

  @Input() teamsOfGroup!:number[];

  @ViewChild(TeamDetailComponent) teamDetailComponent!:TeamDetailComponent;
  @ViewChildren("teamDiv") teamDivs!:QueryList<ElementRef>;

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.initTeams();
  }

  initTeams(){
    this.teamService.getTeams().subscribe((dsadsa) => this.teams = dsadsa);
  }

  ngAfterViewInit(): void {
    //ViewChildren example
    this.teamDivs.get(2)?.nativeElement.setAttribute('style', 'border-left: solid black 5px');
  }

}
