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

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [CountryService]
})
export class TeamDetailComponent implements OnInit {
  @Input() team : Team | undefined;
  @Output() clearDetails = new EventEmitter();

  constructor(public countryService:CountryService, private messageService:MessageService) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes && changes["team"] && changes["team"].currentValue){
      this.messageService.add("Selected team is: " + changes["team"].currentValue["name"]);
    }
    if(changes && changes["team"] && changes["team"].previousValue){
      this.messageService.add("Selected team was: " + changes["team"].previousValue["name"]);
    }

    this.countryService.countryData = undefined;
    if(this.team) {
      this.countryService.initCountryData(this.team.name)
        .subscribe(countryData =>
          this.countryService.countryData = countryData[0]);
    }
  }


  ngOnInit(){
    console.log("OnInit happened");
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
