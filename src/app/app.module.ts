import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CompetitionsComponent } from "./components/tables/competitions/competitions.component";
import { MatTableModule } from "@angular/material/table";
import { EmblemComponent } from "@ui/emblem/emblem.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { TeamsComponent } from "./components/tables/teams/teams.component";
import { MatchesComponent } from "./components/tables/matches/matches.component";
import { TeamComponent } from "./components/items/team/team.component";
import { TablesComponent } from "./components/tables/tables.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { Error502Component } from "./components/erorrs/error502/error502.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CompetitionComponent } from "./components/items/competition/competition.component";
import { MatIconModule } from "@angular/material/icon";
import { Error404Component } from "./components/erorrs/error404/error404.component";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    EmblemComponent,
    TeamsComponent,
    MatchesComponent,
    TeamComponent,
    TablesComponent,
    Error502Component,
    CompetitionComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
