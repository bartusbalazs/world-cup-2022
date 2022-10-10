import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {TEAMS} from "./model/team-list";
import {Team} from "./model/team.model";
import {TeamDetailComponent} from "../team-detail/team-detail.component";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = TEAMS;
  selectedTeam : Team | undefined;

  @Input() teamsOfGroup!:number[];

  @ViewChild(TeamDetailComponent) teamDetailComponent!:TeamDetailComponent;
  @ViewChildren("teamDiv") teamDivs!:QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //ViewChildren example
    this.teamDivs.get(2)?.nativeElement.setAttribute('style', 'border-left: solid black 5px');
  }

  onSelect(team : Team){
    this.selectedTeam = team;
  }

  clearSelectedTeam(){
    //ViewChild example
    // this.teamDetailComponent.team = undefined;

    this.selectedTeam = undefined;
  }

}
