import {ResultType} from "./result-type";

export class Result {
  constructor(public homeTeamScore:number, public awayTeamScore:number, public resultType:ResultType|string) {
  }
}
