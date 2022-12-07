import { Injectable } from '@angular/core';
import {Bet} from "../tournament-group/model/bet.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {ResultType} from "../tournament-group/model/result-type";

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private betsUrl = 'api/bets';

  constructor(private http: HttpClient) { }

  getBetsByMatch(matchId: number|undefined){
    return this.http.get<Bet[]>(this.betsUrl + "/" + matchId,  { observe:
        'response' }).pipe(retry(3),catchError(this.handleError));
  }

  submitBet(bet: Bet, matchId: number|undefined) {
    return this.http.post<Bet>(this.betsUrl + "/" + matchId + "/" +
      bet.userOfBet.username, BetService.mapBet(bet));
  }

  public static mapBet(bet: Bet) {
    switch (bet.resultOfBet.resultType){
      case ResultType.HOME_WIN:
        bet.resultOfBet.resultType = "HOME_WIN";
        break;
      case ResultType.DRAW:
        bet.resultOfBet.resultType = "DRAW";
        break;
      case ResultType.AWAY_WIN:
        bet.resultOfBet.resultType = "AWAY_WIN";
        break;
    }
    return bet;
  }

  deleteBet(bet: Bet, matchId: number|undefined) {
    return this.http.delete(this.betsUrl + "/" + matchId + "/" +
      bet.userOfBet.username);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
// A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
// The backend returned an unsuccessful response code.
// The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
// Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
