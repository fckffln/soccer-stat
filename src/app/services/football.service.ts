import {Injectable} from '@angular/core';
import {Team} from "../models/team.model";
import {Match} from "../models/match.model";
import {Competition} from "../models/competition.model";
import {Area} from "../models/area.model";
import {Options} from "../../library/http/options.model";
import {getUnit, getUnitList} from "../../library/http/getUnit";
import {request} from "../../library/http/request.model";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FootballService {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public store = {
    matches: undefined as request<Match[]> | undefined,
    competitions: undefined as request<Competition[]> | undefined,
    teams: undefined as request<Team[]> | undefined,
    areas: undefined as request<Area[]> | undefined,
    match: undefined as Match | undefined,
    competition: undefined as Competition | undefined,
    team: undefined as Team | undefined,
    area: undefined as Area | undefined,
  }

  constructor(private _router: Router) {
  }

  public getCompetitions(options?: Options) {
    getUnitList<Competition[]>(
      this.isLoading$,
      this._router,
      'competitions',
      this.store,
      options,
      (v) => {
        debug(v);
        v.result = v.result.sort((a,b) => a.id > b.id ? 1 : -1);
        return v;
      }
    );
  };

  public getMatches(options?: Options) {
    getUnitList<Match[]>(this.isLoading$,this._router,'matches', this.store, options, debug);
  };

  public getTeams(options?: Options) {
    getUnitList<Team[]>(this.isLoading$,this._router,'teams', this.store, options, debug);
  };

  public getTeam(id: number, options?: Options) {
    if (options) options[0] = [String(id), 'ROUTE'];
    else options = {0: [String(id), 'ROUTE']};
    getUnit<Team>(this.isLoading$,this._router,'team','teams', this.store, options, debug);
  };

  public getMatchesByTeam(id: number, options?: Options) {
    if (options) options[1] = ['matches', 'ROUTE'];
    else options = {1: ['matches', 'ROUTE']};
    if (options) options[0] = [String(id), 'ROUTE'];
    else options = {0: [String(id), 'ROUTE']};
    getUnitList<Match[]>(this.isLoading$,this._router,'matches', this.store, options, debug, 'teams');
  }

  public getAreas(options?: Options) {
    getUnitList<Area[]>(this.isLoading$,this._router,'areas', this.store, options, debug);
  };

  public getCompetition(id: number, options?: Options) {
    if (options) options[0] = [String(id), 'ROUTE'];
    else options = {0: [String(id), 'ROUTE']};
    getUnit<Team>(this.isLoading$,this._router,'competition','competitions', this.store, options, debug);
  }

  public getMatchesByCompetition(id: number, options?: Options) {
    if (options) options[1] = ['matches', 'ROUTE'];
    else options = {1: ['matches', 'ROUTE']};
    if (options) options[0] = [String(id), 'ROUTE'];
    else options = {0: [String(id), 'ROUTE']};
    getUnitList<Match[]>(this.isLoading$,this._router,'matches', this.store, options, debug, 'competitions');
  }
}

// debug on/off
function debug(v: any): any {
  // console.log(v);
  return v;
}
