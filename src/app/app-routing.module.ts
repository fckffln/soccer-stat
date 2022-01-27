import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TablesComponent } from "./components/tables/tables.component";
import { TeamComponent } from "./components/items/team/team.component";
import { Error502Component } from "./components/erorrs/error502/error502.component";
import { CompetitionComponent } from "./components/items/competition/competition.component";
import { Error404Component } from "./components/erorrs/error404/error404.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
  },
  {
    path: "team/:id",
    component: TeamComponent,
  },
  {
    path: "competition/:id",
    component: CompetitionComponent,
  },
  {
    path: "502",
    component: Error502Component,
  },
  {
    path: "404",
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
