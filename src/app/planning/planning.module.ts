import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningHomeComponent } from './planning-home/planning-home.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    PlanningHomeComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
