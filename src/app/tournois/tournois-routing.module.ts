import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournoisHomeComponent } from './tournois-home/tournois-home.component';

const routes: Routes = [
  {path : '', 
  component: TournoisHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournoisRoutingModule { }
