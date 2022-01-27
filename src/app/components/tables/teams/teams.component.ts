import { AfterContentChecked, Component, Input } from "@angular/core";
import { FootballService } from "@services/football.service";
import { Team } from "@models";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "teams-data",
  templateUrl: "./teams.component.html",
  styleUrls: ["../tables.scss"],
})
export class TeamsComponent implements AfterContentChecked {
  @Input() teams: Team[] = [];
  displayedColumns: string[] = ["id", "name", "clubColors", "area", "venue"];
  filter = "";

  constructor(private _service: FootballService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngAfterContentChecked() {
    this.filter = this._route.snapshot.queryParams["tname"];
    this.setFilter(this.filter);
  }

  setFilter(filter: string) {
    if (filter) {
      const store = this._service.store.teams!;
      this.teams = store?.result.filter(c => c.name.toLowerCase().includes(filter.toLowerCase())) || [];
      if (store?.count) store.count = this.teams.length;
    }
  }

  filtered(e: any) {
    if (!e?.length) this.clear();
    else {
      const queryParams: Params = { ...this._route.snapshot.queryParams, tname: e };
      this._router.navigate(
        [],
        {
          relativeTo: this._route,
          queryParams: queryParams,
          queryParamsHandling: "merge",
        }).then();
    }
    const store = this._service.store.teams!;
    this.teams = store.result.filter(c => c.name.toLowerCase().includes(e.toLowerCase()));
    store.count = this.teams.length;
  }

  clear() {
    const queryParams: Params = { ...this._route.snapshot.queryParams, tname: "" };
    this._router.navigate(
      [],
      {
        relativeTo: this._route,
        queryParams: queryParams,
        queryParamsHandling: "merge",
      }).then();
  }
}
