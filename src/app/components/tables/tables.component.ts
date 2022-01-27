import { Component, OnInit } from "@angular/core";
import { FootballService } from "@services/football.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.scss"],
})
export class TablesComponent implements OnInit {

  constructor(private _service: FootballService) {
  }

  get store() {
    return this._service.store;
  }

  ngOnInit() {
    this._service.getCompetitions();
    this._service.getTeams();
  }
}
