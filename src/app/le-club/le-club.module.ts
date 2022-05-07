import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeClubRoutingModule } from './le-club-routing.module';
import { LeClubHomeComponent } from './le-club-home/le-club-home.component';


@NgModule({
  declarations: [
    LeClubHomeComponent
  ],
  imports: [
    CommonModule,
    LeClubRoutingModule
  ]
})
export class LeClubModule { }
