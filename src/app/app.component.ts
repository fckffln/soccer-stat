import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FootballService} from "./services/football.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _service: FootballService, private _ref: ChangeDetectorRef) {
    this.isLoading$ = this._service.isLoading$;
  }

  ngAfterContentChecked() {
    this._ref.detectChanges();
  }
}
