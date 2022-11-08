import { Component, OnInit } from '@angular/core';
import {TournamentGroup} from "../../model/tournament-group.model";
import {TournamentGroupService} from "../../../services/tournament-group.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-tournament-group-detail',
  templateUrl: './tournament-group-detail.component.html'
})
export class TournamentGroupDetailComponent implements OnInit {
  group: TournamentGroup | undefined;

  constructor(private groupService:TournamentGroupService,
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
        });
    }
  }

  goBack() {
    this.location.back();
  }
}
