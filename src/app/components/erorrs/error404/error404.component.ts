import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FootballService } from "@services/football.service";

@Component({
  selector: "app-error502",
  templateUrl: "./error404.component.html",
  styleUrls: ["../errors.scss"],
})
export class Error404Component implements OnInit {

  constructor(private _router: Router, private _service: FootballService) {
    this._service.isLoading$.next(false);
  }

  main() {
    this._router.navigateByUrl("").then();
  }

  ngOnInit(): void {
  }

}
