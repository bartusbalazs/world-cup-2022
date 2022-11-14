import {Team} from "../../teams/model/team.model";

export class TournamentGroup {

  constructor(public id:number, public name:string, public teams:Team[]) { }

}
