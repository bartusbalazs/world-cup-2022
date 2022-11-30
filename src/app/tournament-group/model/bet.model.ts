import {Match} from "./match.model";
import {User} from "./user.model";
import {Result} from "./result.model";

export class Bet {
  constructor(public id:number|undefined, public match:Match|undefined, public userOfBet:User, public resultOfBet:Result) {
  }
}
