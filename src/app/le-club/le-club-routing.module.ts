import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeClubHomeComponent } from './le-club-home/le-club-home.component';
const routes: Routes = [
  {path : '', 
  component: LeClubHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeClubRoutingModule { }
