import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {FootballService} from "../../services/football.service";

@Component({
  selector: 'app-error502',
  templateUrl: './error502.component.html',
  styleUrls: ['./error502.component.scss']
})
export class Error502Component implements OnInit {

  retry() {
    console.log(environment.lastUri)
    this._router.navigateByUrl(environment.lastUri);
  }

  constructor(private _router: Router, private _service: FootballService) {
    this._service.isLoading$.next(false);
  }

  ngOnInit(): void {
  }

}
