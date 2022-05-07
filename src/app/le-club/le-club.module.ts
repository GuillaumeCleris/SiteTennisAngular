import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeClubRoutingModule } from './le-club-routing.module';
import { LeClubHomeComponent } from './le-club-home/le-club-home.component';
import { ClassDirective } from './le-club-home/class.directive';


@NgModule({
  declarations: [
    LeClubHomeComponent,
    ClassDirective
  ],
  imports: [
    CommonModule,
    LeClubRoutingModule
  ]
})
export class LeClubModule { }
