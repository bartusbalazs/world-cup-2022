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
  @Input("match") match: Match | undefined;
  bet:Bet|undefined;
  public resultTypes = Object.values(ResultType);


  constructor(public betService:BetService) { }

  ngOnInit(): void {
  }

  onSubmit(betForm: NgForm) {
    if(this.bet){
      this.betService.submitBet(this.bet);
      this.bet = undefined;
    }
  }

  addNewBet() {
    this.bet = new Bet(this.betService.idCounter++, this.match, new
    User("",""), new Result(0,0,ResultType.HOME_WIN));
  }

  editBet(bet: Bet) {
    this.bet = bet;
  }

  deleteBet(bet: Bet) {
    this.betService.bets.splice(this.betService.bets.indexOf(bet),
      1);
  }
  getBets() {
    return this.betService.bets.filter((b) => b.match?.id ==
      this.match?.id);
  }


}
