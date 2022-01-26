import {Team} from "./team.model";
import {Competition} from "./competition.model";
import {Score} from "./score.model";
import {Season} from "./season.model";

export interface Match {
  id: number,
  homeTeam: Team,
  awayTeam: Team,
  competition: Competition,
  group: null,
  lastUpdated: Date,
  matchday: number,
  referees: [],
  score: Score,
  season: Season,
  stage: string,
  status: string,
  utcDate: Date,
}
