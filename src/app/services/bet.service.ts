import { Injectable } from '@angular/core';
import {Bet} from "../tournament-group/model/bet.model";

@Injectable({
  providedIn: 'root'
})
export class BetService {
  bets:Bet[] = [];
  idCounter = 0;

  constructor() { }

  submitBet(bet: Bet) {
    let index = this.bets.map((b) => b.id).indexOf(bet.id);
    if(index > -1){
      this.bets[index] = bet;
    } else {
      this.bets.push(bet);
    }
  }

}
