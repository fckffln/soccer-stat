import { Component, OnInit } from '@angular/core';
import {FootballService} from "../../services/football.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  get store() {return this._service.store}

  constructor(private _service: FootballService) {}

  ngOnInit() {
    this._service.getCompetitions();
    this._service.getTeams();
  }
}
