import { Component, OnInit } from '@angular/core';
import {Match} from "../../model/match.model";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MatchService} from "../../../services/match.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  match: Match | undefined;

  constructor(private route: ActivatedRoute,
              private location:Location,
              private matchService:MatchService) { }

  ngOnInit(): void {
    this.initMatch();
  }

  initMatch(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.matchService.getMatchById(id)
        .subscribe(match => {
          this.match = match;
        });
    }
  }

  goBack() {
    this.location.back();
  }

}
