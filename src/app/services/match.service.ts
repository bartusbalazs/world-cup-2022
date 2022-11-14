import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Match} from "../matches/model/match.model";
import {MATCHES} from "../matches/model/match-list";

@Injectable()
export class MatchService {
  private matchesUrl = 'api/matches';

  constructor(private http: HttpClient) { }

  // //get matches with API
  // getMatchesByGroup(groupId:number): Observable<Match[]> {
  //   return this.http.get<Match[]>(this.matchesUrl + "/" + groupId);
  // }
  //
  // //get match by id with API
  // getMatchById(id: string): Observable<Match> {
  //   return this.http.get<Match>(this.matchesUrl + "/" + id);
  // }

  //get mock matches
  getMatchesByGroup(groupId:number): Observable<Match[]> {
    return of(MATCHES.filter((m) => m.groupId == groupId));
  }

  //get mock match by id
  getMatchById(id: string): Observable<Match> {
    return of(MATCHES.filter((m) => m.id.toString() ==
      id)[0]);
  }

}
