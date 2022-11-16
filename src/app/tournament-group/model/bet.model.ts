import {Match} from "./match.model";
import {User} from "./user.model";
import {Result} from "./result.model";

export class Bet {
  constructor(public id:number, public match:Match|undefined, public user:User, public result:Result) {
  }
}
