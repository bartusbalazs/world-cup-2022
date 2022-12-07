import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../model/match.model";
import {Bet} from "../../model/bet.model";
import {User} from "../../model/user.model";
import {ResultType} from "../../model/result-type";
import {Result} from "../../model/result.model";
import {NgForm} from "@angular/forms";
import {BetService} from "../../../services/bet.service";

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  bets:Bet[] | undefined;
  @Input("match") match: Match | undefined;
  bet:Bet|undefined;
  public resultTypes = Object.values(ResultType);

  constructor(public betService:BetService) { }

  ngOnInit(): void {
    this.initBets(this.match?.id);
  }

  initBets(matchId:number|undefined) {
    this.betService.getBetsByMatch(matchId)
      .subscribe(resp => {
        console.log(resp);
        if(resp.body) {
          this.bets = resp.body;
        }

      });
  }

  onSubmit() {
    if(this.bet){
      this.betService.submitBet(this.bet, this.match?.id).subscribe(bet => {
        this.initBets(this.match?.id);
      });
      this.bet = undefined;
    }
  }

  addNewBet() {
    this.bet = {
      id: undefined,
      match: this.match,
      userOfBet: new User("",""),
      resultOfBet: new Result(0,0, ResultType.HOME_WIN)};
  }


  editBet(bet: Bet) {
    this.bet = bet;
  }

  deleteBet(bet: Bet) {
    this.betService.deleteBet(bet, this.match?.id).subscribe(resp=> {
      this.initBets(this.match?.id);
    });
  }

}
