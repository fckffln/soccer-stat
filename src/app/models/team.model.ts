import {Area} from "./area.model";
import {Match} from "./match.model";

export interface Team {
  id: number,
  name: string,
  address: string,
  area: Area,
  clubColors: string,
  crestUrl: string,
  email: string,
  founded: number,
  lastUpdated: Date,
  phone: string,
  shortName: string,
  tla: string,
  venue: string,
  website: string,
  matches: Match[],
}
