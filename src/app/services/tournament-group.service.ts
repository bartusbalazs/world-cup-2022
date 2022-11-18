import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {TournamentGroup} from "../tournament-group/model/tournament-group.model";
import {GROUPS} from "../tournament-group/model/tournament-group-list";

@Injectable()
export class TournamentGroupService {
  private groupsUrl = 'api/groups';

  constructor(private http: HttpClient, private messageService:MessageService) { }

  //get groups with API
  getGroups(): Observable<TournamentGroup[]> {
    return this.http.get<TournamentGroup[]>(this.groupsUrl);
  }

  //get group by id with API
  getGroupById(id: string): Observable<TournamentGroup> {
    return this.http.get<TournamentGroup>(this.groupsUrl + "/" + id);
  }

  // //get mock groups
  // getGroups(): Observable<TournamentGroup[]> {
  //   return of(GROUPS);
  // }
  //
  // //get mock group by id
  // getGroupById(id: string): Observable<TournamentGroup> {
  //   return of(GROUPS.filter((g) => g.id.toString() ==
  //     id)[0]);
  // }

}
