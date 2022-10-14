import { Injectable } from '@angular/core';
import {Team} from "../teams/model/team.model";
import {TEAMS} from "../teams/model/team-list";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";

@Injectable()
export class TeamService {
  private teamsUrl = 'api/teams';

  constructor(private http: HttpClient, private messageService:MessageService) { }

  getTeams(): Observable<Team[]> {
    const teams = this.http.get<Team[]>(this.teamsUrl);
    this.messageService.add("TeamService: fetched teams")
    return teams;
  }

}
