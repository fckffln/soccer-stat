import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from "./components/tables/tables.component";
import {TeamComponent} from "./components/team/team.component";
import {Error502Component} from "./components/error502/error502.component";
import {CompetitionComponent} from "./components/competition/competition.component";

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
  },
  {
    path: 'team/:id',
    component: TeamComponent,
  },
  {
    path: 'competition/:id',
    component: CompetitionComponent,
  },
  {
    path: '502',
    component: Error502Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
