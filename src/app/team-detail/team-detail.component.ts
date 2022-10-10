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

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team : Team | undefined;
  @Output() clearDetails = new EventEmitter();

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes && changes["team"] && changes["team"].currentValue){
      console.log("Selected team is: " + changes["team"].currentValue["name"]);
    }
    if(changes && changes["team"] && changes["team"].previousValue){
      console.log("Selected team was: " + changes["team"].previousValue["name"]);
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
