import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningHomeComponent } from './planning-home/planning-home.component';
import { CalendarComponent } from './calendar/calendar.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    PlanningHomeComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class PlanningModule { }
