import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { FootballService } from "@services/football.service";

@Component({
  selector: "app-error502",
  templateUrl: "./error502.component.html",
  styleUrls: ["../errors.scss"],
})
export class Error502Component implements OnInit {

  constructor(private _router: Router, private _service: FootballService) {
    this._service.isLoading$.next(false);
  }

  retry() {
    this._router.navigateByUrl(environment.lastUri).then();
  }

  ngOnInit(): void {
  }

}
