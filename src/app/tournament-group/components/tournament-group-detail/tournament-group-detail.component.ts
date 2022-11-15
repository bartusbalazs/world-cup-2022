import { Component, OnInit } from '@angular/core';
import {TournamentGroup} from "../../model/tournament-group.model";
import {TournamentGroupService} from "../../../services/tournament-group.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {Match} from "../../model/match.model";
import {MatchService} from "../../../services/match.service";

@Component({
  selector: 'app-tournament-group-detail',
  styleUrls: ['./tournament-group-detail.component.css'],
  templateUrl: './tournament-group-detail.component.html'
})
export class TournamentGroupDetailComponent implements OnInit {
  group: TournamentGroup | undefined;
  matches: Match[] | undefined;

  constructor(private groupService:TournamentGroupService,
              private matchService:MatchService,
              private route: ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {
    this.initGroup();
  }

  private initGroup() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.groupService.getGroupById(id)
        .subscribe(group => {
          this.group = group;
          this.initMatches();
        });
    }
  }

  goBack() {
    this.location.back();
  }

  private initMatches() {
    if(this.group) {
      this.matchService.getMatchesByGroup(this.group.id)
        .subscribe(matches => {
          this.matches = matches;
        });
    }
  }
}
