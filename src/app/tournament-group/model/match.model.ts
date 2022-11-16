import {Team} from "../../teams/model/team.model";

export class Match {
  constructor(
    public id:number,
    public groupId:number,
    public startTime:string,
    public stadium:string,
    public homeTeam:Team,
    public awayTeam:Team) {
  }
}
