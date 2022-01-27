import { AfterContentChecked, Component, Input } from "@angular/core";
import { Competition } from "@models";
import { FootballService } from "@services/football.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "competitions-data",
  templateUrl: "./competitions.component.html",
  styleUrls: ["../tables.scss"],
})
export class CompetitionsComponent implements AfterContentChecked {
  @Input() competitions: Competition[] = [];
  displayedColumns: string[] = ["id", "name", "area", "season"];
  filter = "";

  constructor(private _service: FootballService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngAfterContentChecked() {
    this.filter = this._route.snapshot.queryParams["cname"];
    this.setFilter(this.filter);
  }

  setFilter(filter: string) {
    if (filter) {
      const store = this._service.store.competitions!;
      this.competitions = store?.result.filter(c => c.name.toLowerCase().includes(filter.toLowerCase())) || [];
      if (store?.count) store.count = this.competitions.length;
    }
  }

  filtered(e: any) {
    if (!e?.length) this.clear();
    else {
      const queryParams: Params = { ...this._route.snapshot.queryParams, cname: e };
      this._router.navigate(
        [],
        {
          relativeTo: this._route,
          queryParams: queryParams,
          queryParamsHandling: "merge",
        }).then();
    }
    this._service.isLoading$.next(true);
    const store = this._service.store.competitions!;
    this.competitions = store.result.filter(c => c.name.toLowerCase().includes(e.toLowerCase()));
    store.count = this.competitions.length;
    this._service.isLoading$.next(false);
  }

  clear() {
    const queryParams: Params = { ...this._route.snapshot.queryParams, cname: "" };
    this._router.navigate(
      [],
      {
        relativeTo: this._route,
        queryParams: queryParams,
        queryParamsHandling: "merge",
      }).then();
  }
}
