import {Area} from "./area.model";
import {Season} from "./season.model";

export interface Competition {
  id: number,
  area: Area,
  name: string,
  code: string,
  currentSeason: Season,
  plan: string,
  numberOfAvailableSeasons: number,
  lastUpdated: Date,
  emblemUrl: string | null,
}
