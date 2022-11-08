import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Team} from "../teams/model/team.model";
import {CountryService} from "./service/country.service";
import {MessageService} from "../services/message.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [CountryService]
})
export class TeamDetailComponent implements OnInit {
  team : Team | undefined;

  constructor(public countryService:CountryService, private messageService:MessageService,
              private route: ActivatedRoute,
              private teamService: TeamService,
              private location: Location ) { }

  ngOnInit(){
    this.initTeam();
  }
  initTeam(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeamById(id.toString())
      .subscribe(team => {
        this.team = team;
        this.initCountryDetails();
      });
  }

  goBack(){
    this.location.back();
  }

  initCountryDetails(){
    this.countryService.countryData = undefined;
    if(this.team) {
      this.countryService.initCountryData(this.team.name)
        .subscribe(countryData =>
          this.countryService.countryData = countryData[0]);
    }
  }

  ngAfterContentInit(){
    console.log("AfterContentInit happened");
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked happened");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit happened");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked happened");
  }

  ngOnDestroy(){
    console.log("OnDestroy happened");
  }


}
