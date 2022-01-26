import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FootballService} from "../../services/football.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent {

  constructor(private _route: ActivatedRoute, private _service: FootballService) {
    const id = Number(this._route.snapshot.params['id']);
    this._service.getCompetition(id);
    this._service.getMatchesByCompetition(id);
  }
  noPhoto = environment.noPhoto;
  get store() {return this._service.store}

}
